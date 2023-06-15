const expess = require("express")

const post = 3560
const app = expess()
app.use(expess.json())
app.get("/",(res)=>{
        res.status(200).json({
                massage: "serever is up and runing"
        })
})

app.listen(port,()=>{
        console.log((`server is up and running`,port));
})