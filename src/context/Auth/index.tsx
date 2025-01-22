import { childrenProps, sessionType } from "@/constants";
import { CookiesProvider, useCookies } from "@/lib";

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

  const setAuth = (session: sessionType) => {
    setCookies("auth", session);
  };
  const removeAuth = () => {
    removeCookies("auth");
  };
  const updateTokens = (accessToken: string, refreshToken: string) => {
    setCookies("auth", { ...auth, accessToken, refreshToken });
  };

  const isItHasAuth = auth !== null;

  return {
    auth,
    setAuth,
    removeAuth,
    isItHasAuth,
    updateTokens,
  };
};
