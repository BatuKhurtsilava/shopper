import supabase from "../services/supabase";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const deleteProduct = async (Category: string, Id: string) => {
  const { data, error } = await supabase.from(Category).delete().eq("Id", Id);
};

export const useDelete = (Category: string, Id: string) => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProductMutation } = useMutation<
    void,
    Error,
    { Category: string; Id: string }
  >({
    mutationFn: ({ Category, Id }) => deleteProduct(Category, Id),
    onSuccess: () => {
      toast.success("Product successfully deleted");
      queryClient.invalidateQueries({
        queryKey: [Category],
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { isDeleting, deleteProductMutation };
};
