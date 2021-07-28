const User = require('../models/user.model');

const userService = {};

userService.createUser = async function({name, email}){
    //intente hacer este codigo de try y si no
    //funciona intente hacer el codigo dentro de catch
    try{
        const user = new User({name, email});
        const newUser = await user.save();
        return newUser;
    }catch(e){
        throw new Error('Error while save user')
    }
}

userService.getUsers = async function (){
    try{
        const users = await User.find({});
        return users;
    }catch(e){
        throw new Error('Error while Paginating Users')
    }
}

userService.getUser = async function (){
    try{
        const users = await User.findById({id});
        return users;
    }catch(e){
        throw new Error('Error while returning User')
    }
}

userService.updateUser = async function({id},{name, email}){
    try{
        const user = await User.findById(id);
        const updateUser = await user.set({name, email}); // user.set se setean los valores por medio del id
        await updateUser.save();
        return this.updateUser;
    }catch(e){
        throw new Error('Error while update User')
    }
}

module.exports = userService;