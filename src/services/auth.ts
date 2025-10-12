import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const AdminLogin = () => {
  const loginApi = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return await axiosInstance
      .post("/auth/login", {
        username,
        password,
      })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (e) => {
      toast.success(e.data.message);
      localStorage.setItem("token", e.data.token);
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
