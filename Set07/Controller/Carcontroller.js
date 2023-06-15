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