import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  API_END_POINT,
  signUpSchema,
  signUpType,
  URL_LINKS,
} from "@/constants";
import { Link } from "react-router";
import { axios, useMutation } from "@/lib";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import useForward from "@/hooks/useForward";

export const SignUpPage = () => {
  useForward();
  const { toast } = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    mutateAsync: mutate,
    error,
    isError,
    isPending,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async () => {
      return await axios.post(API_END_POINT.SIGN_up, getValues());
    },
    onSuccess(response) {
      toast({
        title: "Successful",
        description: response.data.message,
        action: (
          <ToastAction altText="Go Sign In">
            <Link to={URL_LINKS.SIGN_IN}> Go Sign In</Link>
          </ToastAction>
        ),
      });
    },
  });

  const onSubmit = async () => {
    if (isPending) return;
    mutate();
  };
  // relative max-w-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign Up
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="fullName">
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-red-500">
              {errors?.fullName && errors?.fullName?.message}
            </p>
          </div>
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="userName">
              User Name
            </Label>
            <Input
              id="userName"
              {...register("userName")}
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-red-500">
              {errors?.userName && errors?.userName?.message}
            </p>
          </div>

          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
            <p className="text-red-500">
              {errors?.email && errors?.email?.message}
            </p>
          </div>
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              {...register("password")}
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-red-500">
              {errors?.password && errors?.password?.message}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign Up"}
            </Button>
            <p className="text-red-500">{isError && error.message}</p>
            <div>
              <p className="text-sm text-gray-600">
                "Already have an account?"
              </p>
              <Link to={URL_LINKS.SIGN_IN} className="font-bold ">
                Sign In
              </Link>
            </div>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpPage;
