import { URL_LINKS, RoleType, ROLES } from "@/constants";
import { useAuth } from "@/context/Auth";
import { Navigate, Outlet, useLocation } from "react-router";

type ProtectedLayoutProps = {
  whoCanSee: RoleType[];
};

// whoCanSee=[admin,user]
export const ProtectedLayout = ({ whoCanSee }: ProtectedLayoutProps) => {
  const { getUser, hasAuth } = useAuth();
  const user = getUser();
  const { pathname } = useLocation();
  const hasPermisionToSee = whoCanSee.includes(user?.role ?? ROLES.ALL);

  return hasPermisionToSee ? (
    <Outlet />
  ) : hasAuth ? (
    <Navigate to={URL_LINKS.UNAUTHORIZED} />
  ) : (
    <Navigate to={URL_LINKS.SIGN_IN} state={{ form: pathname }} />
  );
};

export default ProtectedLayout;
