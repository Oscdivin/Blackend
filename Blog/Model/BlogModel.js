const expess = require("express")

const BlogDataShceme = expess.Shcema({
        Username:{
                type: String,
        },
        PhoneNo:{
                type: number,
        },
        Age:{
                type: number,
        },
        Password:{
                type: number,
        },
        
        Log:{
                type: String,
        }
})

const BlogData = expess.model("Blog",  BlogData)

mmodule.export = BlogData