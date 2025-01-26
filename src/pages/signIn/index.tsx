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
import { useSignIn } from "@/utils";
import { Link } from "react-router";

export const SignInPage = () => {
  const { register, formErrors, isError, requestError, onSubmit, isPending } =
    useSignIn();
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
            <Label htmlFor="email" className="hover:cursor-pointer">
              Email
            </Label>
            <Input
              id="email"
              {...register("email")}
              type="text"
              placeholder="Enter your email"
              aria-invalid={!!formErrors?.email}
              hasHelperText={!!formErrors?.email}
              helperTextProps={{ children: formErrors.email?.message }}
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
              aria-invalid={!!formErrors?.password}
              hasHelperText={!!formErrors?.password}
              helperTextProps={{ children: formErrors.password?.message }}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign In"}
            </Button>

            {isError && <HelperText>{requestError?.message}</HelperText>}

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
