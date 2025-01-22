import { childrenProps, sessionType, URL_LINKS } from "@/constants";
import { CookiesProvider, useCookies } from "@/lib";
import { useNavigate } from "react-router";

type cookies = {
  auth: sessionType | null;
};

export const AuthProdiver = ({ children }: childrenProps) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      {children}
    </CookiesProvider>
  );
};

export const useAuth = () => {
  const [{ auth = null }, setCookies, removeCookies] = useCookies<
    "auth",
    cookies
  >(["auth"]);
  const navigate = useNavigate();

  const signin = (session: sessionType) => {
    setCookies("auth", session);
    navigate(URL_LINKS.HOME);
  };
  const signout = () => {
    removeCookies("auth");
    navigate(URL_LINKS.SIGN_IN);
  };
  const updateRefersh = (accessToken: string, refreshToken: string) => {
    setCookies("auth", { ...auth, accessToken, refreshToken });
  };

  const isItLogin = auth !== null;

  return {
    auth,
    signin,
    signout,
    isItLogin,
    updateRefersh,
  };
};
