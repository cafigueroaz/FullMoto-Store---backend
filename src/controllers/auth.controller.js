import { verifyEncriptedPassword } from "../helpers/bcrypt.helpers.js";
import { dbGetUserByEmail } from "../services/user.services.js";

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

  res.json({ msg: "usuario logueado" });
};

export { loginUser };
