import { verifyEncriptedPassword } from "../helpers/bcrypt.helpers.js";
import { dbGetUserByEmail } from "../services/user.services.js";
import { generateToken } from "../helpers/jwt.helpers.js";

const loginUser = async (req, res) => {
  const inputData = req.body;

  const userFound = await dbGetUserByEmail(inputData.email);

  console.log(userFound);
  if (!userFound) {
    return res.json({ msg: "Error: El usuario no existe, registrese" });
  }

  const isMatch = verifyEncriptedPassword(
    inputData.password,
    userFound.password
  );

  if (!isMatch) {
    return res.json({ msg: "Credenciales invalidas." });
  }

  const payload = {
    name: userFound.name,
    email: userFound.email,
    role: userFound.role,
  };

  const token = generateToken(payload);

  const jsonUserFound = userFound.toObject();

  delete jsonUserFound.password;

  res.json({ user: jsonUserFound, token });
};

const reNewToken = (req, res) => {
  const payload = req.payload;

  delete payload.iat;
  delete payload.exp;

  res.json({ msg: "renovar token", payload });
};

export { loginUser, reNewToken };
