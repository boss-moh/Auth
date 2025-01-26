import { childrenProps, sessionType, tokensType } from "@/constants";
import { CookiesProvider, useCookies } from "@/lib";

type cookies = {
  auth: sessionType | null;
};

export const AuthProdiver = ({ children }: childrenProps) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/", secure: true }}>
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
  const updateTokens = (tokens: tokensType) => {
    setCookies("auth", { ...auth, ...tokens });
  };
  const getUser = () => {
    return auth?.user || null;
  };

  const hasAuth = auth !== null;

  return {
    auth,
    setAuth,
    removeAuth,
    hasAuth,
    updateTokens,
    getUser,
  };
};
