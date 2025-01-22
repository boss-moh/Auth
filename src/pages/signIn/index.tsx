import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelperText } from "@/components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  API_END_POINT,
  loginSchema,
  loginType,
  URL_LINKS,
  sessionType,
} from "@/constants";
import { Link } from "react-router";
import { axios, useMutation } from "@/lib";
import { useAuth } from "@/context/Auth";
import useForward from "@/hooks/useForward";

export const SignInPage = () => {
  useForward();
  const { signin } = useAuth();

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
      signin(response);
    },
  });

  const onSubmit = async () => {
    if (isPending) return;
    mutate();
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="hover:cursor-pointer">
              username
            </Label>
            <Input
              id="userName"
              {...register("username")}
              type="text"
              placeholder="Enter your username"
              hasHelperText={!!errors?.username}
              helperTextProps={{ children: errors.username?.message }}
            />
            {/* <p className="text-red-500">
              {errors?.username && errors?.username?.message}
            </p> */}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="hover:cursor-pointer">
              Password
            </Label>
            <Input
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              hasHelperText={!!errors?.password}
              helperTextProps={{ children: errors.password?.message }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign In"}
            </Button>
            {isError && <p className="text-red-500">{error?.message}</p>}
            <div>
              <p className="text-sm text-gray-600">"Don't have an account?" </p>
              <Link to={URL_LINKS.SIGN_UP} className="font-bold ">
                Sign Up
              </Link>
            </div>
          </div>
        </CardFooter>
      </form>
    </>
  );
};

export default SignInPage;
