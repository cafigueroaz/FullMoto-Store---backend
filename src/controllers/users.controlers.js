import Usermodel from "../models/User.model.js";
import { registerUser } from "../services/user.services.js";

const createUser = async (req, res) => {
const data = req.body;

  console.log(data);

  const dataRegistered = await registerUser(data);

  res.json({
    msg: "Se creo un usuario",
    dataRegistered
  });

}

export { createUser };