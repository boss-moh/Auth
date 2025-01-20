import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_END_POINT, userType } from "@/constants";
import { useAuth } from "@/context/Auth";
import { useQuery, useAxiosWithAuth, useRefreshToken } from "@/lib";

export const HomePage = () => {
  const axiosWithAuth = useAxiosWithAuth();
  const refresh = useRefreshToken();
  const {
    data: response,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await axiosWithAuth.get(API_END_POINT.USERS),
  });
  const { signout } = useAuth();

  const userList: userType[] = response?.data ?? [];
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">HomePage</CardTitle>
        <CardContent>
          {isLoading && "isLoading..."}
          {isError && error?.message}
          <ul className="space-y-2">
            {userList.map((user, index) => (
              <li className="border border-gray-400" key={index}>
                <p>{user.fullName}</p>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => signout()}>
            Sign Out{" "}
          </Button>
          <Button
            variant={"outline"}
            className="w-full"
            onClick={() => refresh()}
          >
            refresh{" "}
          </Button>
        </CardFooter>
      </CardHeader>
    </>
  );
};

export default HomePage;
