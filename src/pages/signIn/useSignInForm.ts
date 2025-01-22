import {
  API_END_POINT,
  loginSchema,
  loginType,
  sessionType,
} from "@/constants";
import { useAuth } from "@/context";
import { axios, useForm, zodResolver } from "@/lib";
import { useMutation } from "@tanstack/react-query";

const useSignInForm = () => {
  const { setAuth } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  const {
    isPending,
    mutateAsync: mutate,
    isError,
    error,
  } = useMutation({
    mutationKey: ["sign In"],
    mutationFn: async () => {
      return await axios.post<unknown, sessionType>(API_END_POINT.SIGN_IN, {
        ...getValues(),
        expiresInMins: 1,
      });
    },
    onSuccess(response) {
      setAuth(response);
    },
  });

  const onSubmit = async () => {
    if (isPending) return;
    mutate();
  };

  return {
    register,
    errors,
    isError,
    isPending,
    error,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useSignInForm;
