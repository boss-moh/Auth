import { URL_LINKS } from "@/constants";
import { useAuth } from "@/context/Auth";
import { Navigate, Outlet } from "react-router";

export const ForwardLayout = () => {
  const { hasAuth } = useAuth();

  if (hasAuth) return <Navigate to={URL_LINKS.HOME} />;
  return <Outlet />;
};

export default ForwardLayout;
