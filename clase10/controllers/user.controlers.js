const userService = require('../services/user.service')
const userController = {};

userController.create = async function(req, res, next){
    try{
        const newUser = await userService.createUser(req.body);
        return res.status(201).json({newUser});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

userController.getUsers = async function(req, res, next){
    try{
        const users = await userService.getUsers();
        return res.status(200).json({status: 200, data: users, message:
            "Succesfully users retrieved"})
    }catch(error){
        return res.status(400).json({status: 400, message:error.message});
    }
}

userController.getUser= async function(req, res, next){
    try{
        const user = await userService.getUser(req.params);
        if (user == null){
            return res.status(400).json({status: 400, message:error.message});
        }
        return res.status(200).json({status: 200, data: users, message:
            "Succesfully user retrieved"})
    }catch(error){
        return res.status(400).json({message:"Cannot find user"});
    }
}

userController.updateUser= async function(req, res, next){
    try{
        const updateUser = await userService.updateUser(req.params, req.body);
        return res.status(200).json({status: 200, data: updateUser, message:"Succesfully update user"});
    }catch(error){
        return res.status(400).json({Status: 400, message: error.message});
    }
}

module.exports = userController;