import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, "aaaaaaaaaaaaaaa", { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, "aaaaaaaaaaaaaaa");
};

export { generateToken, verifyToken };
