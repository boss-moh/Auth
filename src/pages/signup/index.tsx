import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Label,
} from "@/components";

import { URL_LINKS } from "@/constants";
import { Link } from "react-router";
import { useSignUp } from "@/utils";
import { HelperText } from "@/components";

export const SignUpPage = () => {
  const { register, isError, isPending, onSubmit, requestError, formErrors } =
    useSignUp();
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign Up
        </CardTitle>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="fullName">
              Full Name
            </Label>
            <Input
              required
              id="fullName"
              {...register("fullName")}
              type="text"
              placeholder="Enter your name"
              hasHelperText={!!formErrors?.fullName}
              helperTextProps={{
                children: formErrors?.fullName?.message,
              }}
            />
          </div>
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="userName">
              User Name
            </Label>
            <Input
              required
              id="userName"
              {...register("userName")}
              type="text"
              placeholder="Enter your name"
              hasHelperText={!!formErrors?.userName}
              helperTextProps={{
                children: formErrors?.userName?.message,
              }}
            />
          </div>

          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="email">
              Email
            </Label>
            <Input
              required
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              hasHelperText={!!formErrors?.email}
              helperTextProps={{
                children: formErrors?.email?.message,
              }}
            />
          </div>
          <div className="space-y-2">
            <Label className="cursor-pointer" htmlFor="password">
              Password
            </Label>
            <Input
              required
              id="password"
              {...register("password")}
              type="text"
              placeholder="Enter your name"
              hasHelperText={!!formErrors?.password}
              helperTextProps={{
                children: formErrors?.password?.message,
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading ... " : "Sign Up"}
            </Button>
            {isError && <HelperText>{requestError?.message}</HelperText>}
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
    </>
  );
};

export default SignUpPage;
