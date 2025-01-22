import { URL_LINKS } from "@/constants";
import { useAuth } from "@/context/Auth";
import { Navigate, Outlet } from "react-router";

export const ProtectedLayout = () => {
  const { isItHasAuth } = useAuth();
  if (isItHasAuth) {
    return <Outlet />;
  } else {
    return <Navigate to={URL_LINKS.SIGN_IN} />;
  }
};

export default ProtectedLayout;
