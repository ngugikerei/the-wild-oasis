import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { editSetting as editSettingAPI } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSetting, isLoading: isUpdating } = useMutation({
    mutationFn: editSettingAPI,
    onSuccess: () => {
      toast.success("Settings Successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isUpdating, editSetting };
}
