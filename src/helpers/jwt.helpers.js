import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, "aaaaaaaaaaaaaaa", { expiresIn: "1h" });
};

export { generateToken };
