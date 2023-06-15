const mongoose = require("mongoose")
const Schema = mongoose.Schema({
        name:{
type:String,
        },
        email:{
Code:number,
        },
        Class:{
type:String,
        },
        Office:{
type:String,
        },
        name:{
type:String,
        },

        State:{
type:String,
        },
})

const Class = mongoose.model("company sell to day")

module.export = Class