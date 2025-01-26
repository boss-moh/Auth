import { axios } from "@/lib";
import { ToastAction } from "@/components/ui/toast";
import {
  API_END_POINT,
  API_RESPONSE,
  signUpSchema,
  signUpType,
  URL_LINKS,
} from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { useForm, useMutation, zodResolver } from "@/lib";
import { useNavigate } from "react-router";

export const useSignUp = () => {
  const { toast } = useToast();
  const navigte = useNavigate();
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
    getValues,
    reset: resetFormFields,
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    mutateAsync: mutate,
    error: requestError,
    isError,
    isPending,
  } = useMutation<API_RESPONSE<[]>>({
    mutationKey: ["signup"],
    mutationFn: async () => {
      return await axios.post(API_END_POINT.SIGN_up, getValues());
    },
    onSuccess(response) {
      resetFormFields();
      toast({
        title: "Successful",
        description: response?.message,
        action: (
          <ToastAction
            altText="Go Sign In"
            onClick={() => navigte(URL_LINKS.SIGN_IN)}
          >
            Go Sign In
          </ToastAction>
        ),
      });
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
    onSubmit: handleSubmit(onSubmit),
    requestError,
    formErrors,
  };
};

export default useSignUp;
