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
import { API_END_POINT, loginSchema, loginType, URL_LINKS } from "@/constants";
import { Link } from "react-router";
import { axios, useMutation } from "@/lib";

export const SignInPage = () => {
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
      return await axios.post(API_END_POINT.SIGN_IN, getValues());
    },
    onSuccess(response) {
      console.log("response", response);
    },
  });

  const onSubmit = async () => {
    if (isPending) return;
    mutate();
  };
  return (
    <Card className="relative max-w-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="hover:cursor-pointer">
              Email
            </Label>
            <Input
              id="email"
              {...register("email")}
              type="text"
              placeholder="Enter your email"
            />
            <p className="text-red-500">
              {errors?.email && errors?.email?.message}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="hover:cursor-pointer">
              Password
            </Label>
            <Input
              id="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            <p className="text-red-500">
              {errors?.password && errors?.password?.message}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign In"}
            </Button>
            {isError && <p className="text-red-500">{error.message}</p>}
            <div>
              <p className="text-sm text-gray-600">"Don't have an account?" </p>
              <Link to={URL_LINKS.SIGN_UP} className="font-bold ">
                Sign Up
              </Link>
            </div>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInPage;
