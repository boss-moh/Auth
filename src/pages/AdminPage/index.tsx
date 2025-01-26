import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Card,
  HelperText,
} from "@/components";
import { API_END_POINT, userType } from "@/constants";
import { useAuth } from "@/context/Auth";
import { useAxiosWithAuth, useQuery } from "@/lib";

export const AdminPage = () => {
  const { getUser, removeAuth } = useAuth();
  const user = getUser()!;

  const axiosWithAuth = useAxiosWithAuth();
  const {
    error,
    isError,
    data: users,
    isPending,
  } = useQuery<userType[]>({
    queryKey: ["users"],
    queryFn: async () => axiosWithAuth.get(API_END_POINT.USERS),
  });
  return (
    <div className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-center">Admin Page</CardTitle>
        <CardContent className="space-y-2">
          <div>
            <h2>Hi Admin, {user.userName}</h2>
            <p>{user.email}</p>
          </div>

          <section className="overflow-scroll overflow-x-hidden max-h-96">
            <header>
              <h3>Users Lists</h3>
            </header>
            <article className="flex flex-col gap-2 ">
              {users?.map((user) => (
                <Card key={user._id} className="p-1">
                  <h4>{user.fullName}</h4>
                  <p>Email {user.email}</p>
                  <p>role {user.role}</p>
                </Card>
              ))}
            </article>
          </section>
          <div>
            {isPending && <p>Loading ...</p>}
            {isError && <HelperText>{error.message}</HelperText>}
          </div>
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

export default AdminPage;
