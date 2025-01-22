import { URL_LINKS } from "@/constants";
import { useAuth } from "@/context/Auth";
import { Navigate, Outlet } from "react-router";

export const ForwardLayout = () => {
  const { isItHasAuth } = useAuth();

  if (isItHasAuth) return <Navigate to={URL_LINKS.HOME} />;
  return <Outlet />;
};

export default ForwardLayout;
