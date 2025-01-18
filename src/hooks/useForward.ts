import { URL_LINKS } from "@/constants";
import { useAuth } from "@/context/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useForward = () => {
  const { isItLogin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isItLogin) navigate(URL_LINKS.HOME);
  }, []);
};

export default useForward;
