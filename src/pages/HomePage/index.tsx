import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components";
import { API_END_POINT, sessionType } from "@/constants";
import { useAuth } from "@/context/Auth";
import { useQuery, useAxiosWithAuth, useRefreshToken } from "@/lib";

export const HomePage = () => {
  const axiosWithAuth = useAxiosWithAuth();
  const { removeAuth } = useAuth();
  const refresh = useRefreshToken();

  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axiosWithAuth.get<null, sessionType>(API_END_POINT.USER_INFOS),
  });

  const userName = data?.username;
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">HomePage</CardTitle>
        <CardContent>
          {isLoading && "isLoading..."}
          {isError && error?.message}
          <h2>userName : {userName}</h2>
          <img src={data?.image} className="bg-gray-100 border rounded" />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => refetch()}>
            re request{" "}
          </Button>
          <Button className="w-full" onClick={() => removeAuth()}>
            Sign Out{" "}
          </Button>
          <Button
            variant={"outline"}
            className="w-full"
            onClick={() => refresh()}
          >
            refresh
          </Button>
        </CardFooter>
      </CardHeader>
    </>
  );
};

export default HomePage;
