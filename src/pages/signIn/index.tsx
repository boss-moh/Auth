import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Label,
  HelperText,
} from "@/components";

import { URL_LINKS } from "@/constants";
import { Link } from "react-router";
import useSignInForm from "./useSignInForm";

export const SignInPage = () => {
  const { onSubmit, register, error, errors, isError, isPending } =
    useSignInForm();

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="hover:cursor-pointer">
              User Name
            </Label>
            <Input
              id="username"
              {...register("username")}
              type="text"
              placeholder="Enter your username"
              aria-invalid={!!errors?.username}
              hasHelperText={!!errors?.username}
              helperTextProps={{ children: errors.username?.message }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="hover:cursor-pointer">
              Password
            </Label>
            <Input
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              aria-invalid={!!errors?.password}
              hasHelperText={!!errors?.password}
              helperTextProps={{ children: errors.password?.message }}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign In"}
            </Button>

            {isError && <HelperText>{error?.message}</HelperText>}

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
