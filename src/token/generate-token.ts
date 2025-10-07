import { sign } from "jsonwebtoken";

export const GenerateToken = (username: string) => {
  return sign({ foo: "bar" }, username);
};
