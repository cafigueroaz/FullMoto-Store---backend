import { verifyToken } from "../helpers/jwt.helpers.js";

const authenticationUser = (req, res, next) => {
  try {
    // Obtener el string donde viene el token.

    const token = req.header("X-Token");

    // Verificar que la cadena no sea vacia.

    if (!token) {
      return res.json({ msg: "Error: Cadena del token vacía." });
    }

    //  Verificar si el token es valido.

    const payload = verifyToken(token);

    // Enviar atraves del req los datos del Payload.

    req.payload = payload;

    next();
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: Token invlaido" });
  }
};

export default authenticationUser;
