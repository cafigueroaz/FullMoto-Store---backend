import jwt from "jwsonwebtoken";

const generateToken = (payload) => {
  jwt.sign(payload, "aaaaaaaaaaaaaaa", { expiresIn: "1h" });
};

export { generateToken };
