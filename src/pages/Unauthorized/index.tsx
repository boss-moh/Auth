import {
  HelperText,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from "@/components";
import { Link } from "react-router";

export const UnauthorizedPage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-2xl font-bold text-center">
          <HelperText>Unauthorized Access</HelperText>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-600">
          Sorry, you don't have permission to access this page.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default UnauthorizedPage;
