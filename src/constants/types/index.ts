import { ComponentProps, ReactNode } from "react";

export type ChildrenType = ReactNode;
export type childrenProps = { children: ChildrenType };
export type svgProps = ComponentProps<"svg">;
export type divProps = ComponentProps<"div">;

export type sessionType = tokensType & { user: userType };

export type tokensType = {
  accessToken: string;
  refreshToken: string;
};
export type userType = {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  image: string;
  role: RoleType;
};

export type API_RESPONSE<T> = {
  status: string;
  code: number;
  data: T;
  message: string;
};


export const ROLES ={
  USER:"user",
  ADMIN:"admin",
  ALL:"all"
} as const
export type RoleType = typeof ROLES[keyof typeof ROLES]  // type will be "user" | "admin"