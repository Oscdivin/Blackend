const express = require("express")

const electionShamec =Shamec({
        name:{
types: String,
        },
        Post:{
types: String,
        },
        State:{
types: String,
        },
        Office:{
types: String,
        },
        PhonNo:{
types: String,
        },
})

const electionexpress = express.model("student", userSchema)

module.export = election