export const URL_LINKS = {
  HOME: "/",
  SIGN_IN: "/auth/signin",
  SIGN_UP: "/auth/signup",
  ADMIN: "/admin",
  USER: "/user",
  UNAUTHORIZED: "/Unauthorized",
  NOT_FOUND: "/*",
  CONTANT: "mailto:moh.saad.abu.kmail@gmail.com",
} as const;


export const MENU_LINKS = [
  {
    text:"Home",to:URL_LINKS.HOME,
    description:"Public Page Can Any One Access It With Out Auth"
  },
  {
    text:"login",to:URL_LINKS.SIGN_IN,
    description:"Public Page Can Any One Access It With Out Auth"
  },
  {
    text:"sign up",to:URL_LINKS.SIGN_UP,
    description:"Public Page Can Any One Access It With Out Auth"
  },
  {
    text:"admin",to:URL_LINKS.ADMIN,
    description:"Page Can Only The  Admin Acces It "
  },
  {
    text:"user",to:URL_LINKS.USER,
    description:"Page Can User And Admin Acces It "
  },
] as const



export default URL_LINKS;
