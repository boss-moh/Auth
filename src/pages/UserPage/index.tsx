import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components";
import { useAuth } from "@/context/Auth";

export const UserPage = () => {
  const { getUser, removeAuth } = useAuth();
  const user = getUser()!;
  return (
    <div className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-center">User Page</CardTitle>
        <CardContent>
          <h2>Hi {user.userName}</h2>
          <p>{user.email}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => removeAuth()}>
            Sign Out{" "}
          </Button>
        </CardFooter>
      </CardHeader>
    </div>
  );
};

export default UserPage;
