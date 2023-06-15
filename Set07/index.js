const  exprees = require("express")

require("./config")

const port =4578
const app =exprees()
app.use(exprees.json())

app.get("/",(res)=>{
        res.status(200).json({
                massage: "server is now  up rinning"
        })

        app.listen("/",(res)=>{
console.log("app is shutdown now");
        })
})