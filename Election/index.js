const  expess =require("express")

require("./config")
const port= 3456
const app =expess()
app.use(expess.json())

app.get("/",(res)=>{
        res.status(200).json(()=>{
                message: "srever is on now";
        })
app.listen("/",(res)=>{
        console.log(`srever is now up running`);
})
})