const authUser = (req, res, next) => {
try {
    const  token = req.header("X-token");


if(!token) {
    return res.json({ msg: "error: cadena del token vacia"})
}

const payload = verifyToken(token)
req.payload = payload;

console.log( "autenticado hpta", payload);
 next();
} catch (error){
    console.error(error);
    res.json({msg: "Error: token invalido"})
}
};



export default authUser;