const   exprees = require("express")
require("./config")

const port = 3546
const app = exprees()
app.use(exprees.json())

app.get("/",(res)=>{
        res.status(200)
        magges: "sever is now no"
})

app.listen(port,()=>{
        console.log(`server is up and running`);
})