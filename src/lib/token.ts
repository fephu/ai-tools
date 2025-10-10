import { sign, verify } from "jsonwebtoken";

export const GenerateToken = (username: string) => {
  return sign({ username }, process.env.JWT_SECRET!, {
    algorithm: "HS256",
    expiresIn: "7d",
  });
};

export const VerifyToken = (token: string) => {
  return verify(token, process.env.JWT_SECRET!);
};
