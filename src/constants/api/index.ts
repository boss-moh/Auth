export const API_BASE_URL = import.meta.env.VITE_REACT_API_URL as string;

export const API_END_POINT = {
  SIGN_IN: "/auth/login",
  SIGN_up: "/auth/signup",
  USER_INFOS: "/auth/me",
  USERS: "/user/getUsers",
  REFERSH: "/auth/refresh",
} as const;
