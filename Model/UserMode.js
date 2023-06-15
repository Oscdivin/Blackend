const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
        name:{
                type:string
        },
        email:{
                type:string
        },
        password:{
                type:string
        },
  phonneuber:{
                type:number
        },
        isFemale:{
                type:Boolen
        },

})

const UserModel = mongoose.model("student", userSchema)

module.export = UserModel