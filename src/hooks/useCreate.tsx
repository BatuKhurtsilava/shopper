import supabase from "../services/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export async function createEditProduct(
  newProduct: {},
  Category: string,
  Id?: string
) {
  if (!Id) {
    const { data, error } = await supabase
      .from(Category)
      .insert([newProduct])
      .select()
      .single();

    if (error) {
      console.error(error);

      throw new Error("product could not be created/edited");
    }

    return data;
  }

  if (Id) {
    const { data, error } = await supabase
      .from(Category)
      .update(newProduct)
      .eq("Id", Id)
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error("product could not be created/edited");
    }

    return data;
  }
}

export const useCreate = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createEditProductMutation } =
    useMutation<void, Error, { newProduct: {}; Category: string }>({
      mutationFn: ({ newProduct, Category }) =>
        createEditProduct(newProduct, Category),
      onSuccess: (_, variables) => {
        toast.success("Product successfully Created");
        const { Category } = variables;
        queryClient.invalidateQueries({
          queryKey: [Category],
        });
      },
      onError: (err: Error) => toast.error(err.message),
    });
  return { isCreating, createEditProductMutation };
};
