import Usermodel from "../models/User.model.js"

const registerUser = async (newUser) => {
    
    return await Usermodel.create(newUser);
    
}

export {
    registerUser
}