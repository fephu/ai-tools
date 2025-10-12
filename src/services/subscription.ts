import { useSubscription } from "@/hooks/use-subscription";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const verifyApi = async ({ key }: { key: string }) => {
  return await axiosInstance
    .post("/subscription/verify", {
      key,
    })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};
export const VerifySubscription = (key: string) => {
  const { setSubscriptionKey } = useSubscription();

  const mutation = useMutation({
    mutationFn: verifyApi,
    onSuccess: (e) => {
      setSubscriptionKey(key);
      toast.success(e.data.message);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      } else {
        toast.error("Unexpected error");
      }
    },
  });

  return mutation;
};

export const CreateFreeSubscription = () => {
  const createFreeApi = async ({
    email,
    name,
  }: {
    email: string;
    name: string;
  }) => {
    return await axiosInstance
      .post("/subscription/create", {
        email,
        name,
      })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  const mutation = useMutation({
    mutationFn: createFreeApi,
    onSuccess: (e) => {
      toast.success(e.data.message);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      } else {
        toast.error("Unexpected error");
      }
    },
  });

  return mutation;
};
