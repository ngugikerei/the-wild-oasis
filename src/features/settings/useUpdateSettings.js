import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient;
  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: () => updateSetting,
    onSuccess: () => {
      toast.success("Settings Successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, updateSettings };
}
