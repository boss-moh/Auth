import { z } from "zod";
const RULES = {
  email: z.string().email("This Should Be Email Like xxxxx@yyyy.zz"),
  password: z.string().min(6, "The Password Should Has Length At Least 6 "),
  userName: z.string().min(6).max(25),
  fullName: z.string().min(6).max(25),
};

export const loginSchema = z.object({
  username: RULES.userName,
  password: RULES.password,
});

export const signUpSchema = z.object({
  fullName: RULES.fullName,
  userName: RULES.userName,
  email: RULES.email,
  password: RULES.password,
});

export type loginType = z.infer<typeof loginSchema>;
export type signUpType = z.infer<typeof signUpSchema>;
