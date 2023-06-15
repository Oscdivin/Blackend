const mongoose = require("mongoose")
const Schema = mongoose.Schema({
        name:{
type:String,
        },
        Card:{
Code:number,
        },
        name:{
type:String,
        },
        owerncar:{
type:String,
        },
        key:{
type:String,
        },

        map:{
type:String,
        },
})

const CarModel = mongoose.model("company sell to day")

module.export = CarModel