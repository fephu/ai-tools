import { sign, type SignOptions, verify } from "jsonwebtoken";

type ExpiresIn = SignOptions["expiresIn"];

export const GenerateToken = (username: string, duration: ExpiresIn) => {
  return sign({ username }, process.env.JWT_SECRET!, {
    algorithm: "HS256",
    expiresIn: duration,
  });
};

export const VerifyToken = (token: string) => {
  try {
    const expired = verify(token, process.env.JWT_SECRET!);

    if (expired) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
