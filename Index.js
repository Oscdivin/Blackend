const  express = require ("exprees")
require("./Conig")
const post = 356
const app = express()
app.use(express.json())


app.get("/",(res)=>{
        res.status(200).json({
                massage: "serever is up and runing"
        })
})

app.listen(port, ()=>{
        console.log((`server is up and running`, port));
})