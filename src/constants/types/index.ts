import { ComponentProps, ReactNode } from "react";

export type ChildrenType = ReactNode;
export type childrenProps = { children: ChildrenType };
export type svgProps = ComponentProps<"svg">;
export type divProps = ComponentProps<"div">;

export type sessionType = {
  accessToken: string;
  refreshToken: string;
  user: userType;
};

export type userType = {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  image: string;
  status: string;
  role: string;
};
