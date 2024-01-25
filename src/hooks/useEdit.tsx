import supabase from "../services/supabase";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditProduct } from "./useCreate";
import { toast } from "react-hot-toast";

export const useEdit = (Category: string) => {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: createEditProductMutation } =
    useMutation<
      unknown,
      Error,
      { newProduct: {}; Category: string; Id: string }
    >({
      mutationFn: ({ newProduct, Category, Id }) =>
        createEditProduct(newProduct, Category, Id),
      onSuccess: () => {
        toast.success("Product successfully Edited");
        queryClient.invalidateQueries({
          queryKey: [Category],
        });
      },
      onError: (err: Error) => toast.error(err.message),
    });
  return { isEditing, createEditProductMutation };
};
