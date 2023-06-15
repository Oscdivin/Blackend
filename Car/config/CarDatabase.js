const CarDatabase = require("express")

const  Set07DB ="monog//.0.0.0.0234SetCarDatabase"

const CarDatabase =async()=>{
        try {
                const dbconnact =await CarDatabase.connect(Set07DB)
                console.log(`server is connected,${dbconnect.connection.host}`);
        } catch (error) {
                console.log("server can't connecting to host",err);
        }
};
export default CarDatabase();

mongoose.connect(Set07DB).then(()=>{
        console.log(`connctecd`);
}).catach((err)=>{
        console.log(err);
})