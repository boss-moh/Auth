import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_END_POINT, userType } from "@/constants";
import { useAuth } from "@/context/Auth";
import { useQuery, useAxiosWithAuth } from "@/lib";

export const HomePage = () => {
  const axiosWithAuth = useAxiosWithAuth();
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
          <div className="space-y-2">
            {userList.map((user, index) => (
              <Card key={index}>
                <CardTitle>{user.fullName}</CardTitle>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => signout()}>
            Sign Out{" "}
          </Button>
        </CardFooter>
      </CardHeader>
    </>
  );
};

export default HomePage;
