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
                res.status(400).json({
                        message: "just one user on the server"
                })
        }
}
const newCarcontrol = async(req, res)=>{
        try {
        const {map,email, password}=req.body;
        const creatyser=await CarModel.create({
                map,email, password
        })
            res.status(201).json({
                message: "get all User",
                data: getCarModel,
            })
        } catch (error) {
                res.status(400).json({
                        message: "just one user on the server"
                })
        }
}
