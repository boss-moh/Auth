import {
  Button,
  CardTitle,
  CardContent,
  CardHeader,
  HelperText,
} from "@/components";
import { URL_LINKS } from "@/constants";
import { Link } from "react-router";

export function NotFound() {
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-600">
          Page Not Found
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <HelperText>
          Error 404: The page you're looking for doesn't exist.
        </HelperText>
        <p className="text-center text-gray-600 ">
          The page you're trying to access may have been moved, deleted, or
          never existed.
        </p>
        <div className="flex flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button asChild className="w-full sm:w-auto">
            <Link to={URL_LINKS.HOME}>Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to={URL_LINKS.CONTANT}>Contact Support</Link>
          </Button>
        </div>
      </CardContent>
    </>
  );
}

export default NotFound;
