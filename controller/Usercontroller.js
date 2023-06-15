const  exprees  =require ("express");
const UserModel = require("../Model/UserMode")
const getAllUsers = async (req, res)=>{
        try {
                const getUser = await UserModel.find()
                res.status(200).json({
                        message: "gotten all users",
                        data: getUsers,
                });
        } catch (error) {
                res.status(400).json({
                        message: "could get all users",
                })
        }
};

const newUser = async (req, res)=>{
        try {
                const {name, email, password, isFamle, phonneuber,}=req.body;
                const creatuser = await UserModel.create({
                        name,
                        email,
                        password,
                        isFamle,
                        phonneuber,
                });
                res.ustatus(201).json({
                        message: "created a new user",
                        data: creatuser,
                })
        } catch (error) {
            return    res.status(404).json({
                        message: "couldnt create user",
                })
        }
}