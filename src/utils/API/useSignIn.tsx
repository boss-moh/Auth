import {
  API_END_POINT,
  loginSchema,
  loginType,
  sessionType,
  URL_LINKS,
} from "@/constants";
import { useAuth } from "@/context";
import { axios, useForm, useMutation, zodResolver } from "@/lib";
import { useLocation, useNavigate } from "react-router";

export const useSignIn = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from || URL_LINKS.HOME;
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
    getValues,
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  const {
    isPending,
    mutateAsync: mutate,
    isError,
    error: requestError,
  } = useMutation<sessionType>({
    mutationKey: ["sign In"],
    mutationFn: async () => {
      return await axios.post(API_END_POINT.SIGN_IN, getValues());
    },
    onSuccess(response) {
      setAuth(response);
      console.log("form", form);
      navigate(form);
    },
  });

  const onSubmit = async () => {
    if (isPending) return;
    mutate();
  };

  return {
    register,
    isError,
    isPending,
    formErrors,
    requestError,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useSignIn;
