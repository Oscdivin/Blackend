const expess = require("expess")

const CarModel = ("../Model/CarModel")

const getCarModel = async(req, res)=>{
        try {
            const      getCar =await CarModel.find()
            res.status(200).json({
                message: "get all User",
                data: getCarModel,
            })
        } catch (error) {
                
        }
}
const newUser = async (req, res)=>{
        try {
                const {name,Post,PhoneNo,State,Office}=req.body;
                const creatuser = await UserModel.create({
                   name,Post,PhoneNo,State,Office
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