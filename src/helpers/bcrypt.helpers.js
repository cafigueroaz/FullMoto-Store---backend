import bcrypt from "bcryptjs";

// Encriptar contraseña.
const encriptedPassword = (passwordUser) => {
  const salt = bcrypt.genSaltSync();

  console.log(salt);

  const hashPassword = bcrypt.hashSync(passwordUser, salt);

  return hashPassword;
};

//Verificar contraseña.
const verifyEncriptedPassword = () => {};

export { encriptedPassword, verifyEncriptedPassword };
