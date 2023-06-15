const expess = require("express")

const  UserBlog = "../Model/UserBlog"

const getAllUserBlog = (req, res)=>{
    try {
        res.status(200).json({
            meseage: "you have  all the user",
            data: getUserBlog,
        });
    } catch (error) {
        res.status(404).json({
            meseage: "we gotten the user now",
        })
    }
}
const newUserBlog = async (req, res)=>{
    try {
        const {Username, Log,Age,pasword,PhoneNo}=req.body;
        const CreateUserBlog = await UserBlog.create({
            Username, Log,Age,pasword,PhoneNo
        });
        res.status(201).json({
            meseage: "we have created a user",
            data: creatuser,
        });
    } catch (error) {
        res.status(404).json({
            meseage: "we gotten the user now",
        })
    }
}