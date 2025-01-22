import { ComponentProps, ReactNode } from "react";

export type ChildrenType = ReactNode;
export type childrenProps = { children: ChildrenType };
export type svgProps = ComponentProps<"svg">;
export type divProps = ComponentProps<"div">;

export type sessionType = tokensType & {
  id: string;
  username: string;
  email: string;
  image: string;
};

export type tokensType = {
  accessToken: string;
  refreshToken: string;
};
// export type userType = {
// id: string;
// userName: string;
// email: string;
// image: string;
// };

// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzczNTYxMzgsImV4cCI6MTczNzM1NjE5OH0.jwJRBsvFXrYDfAOnF8m86HbATkfKHgk8aEOnP0OQkG0",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzczNTYxMzgsImV4cCI6MTczOTk0ODEzOH0.HO4mGcf9l3uDGdg_LbzYBrqkH5_ROkBooc6mNeGaicA",
//   "id": 1,
//   "username": "emilys",
//   "email": "emily.johnson@x.dummyjson.com",
//   "firstName": "Emily",
//   "lastName": "Johnson",
//   "gender": "female",
//   "image": "https://dummyjson.com/icon/emilys/128"
// }
