import jwt from "jsonwebtoken";

interface Payload{
  id: string;
  date: number;
}

export const generateAuthToken = (payload: Payload): string => {
  return jwt.sign(payload, process.env.JWT_KEY!, {
    expiresIn: "1h",
  });
};
