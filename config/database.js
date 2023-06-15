const Database = require("mongoose")

const Set07DB = "mongodb://0.0.0.0:27017/Set7Database"
const Set07DB1 ="mongodb://127.0.0.0.027017/Set7Database"
const  Set7DRs1 = "mongodb://localhost/SetDatabase"
const Database = async()=>{
        try {
                const dbconnact = await Database.connect(Set07DB)
                console.log(`Datbase is connected to ${dbconnact.connection.host}`);
        } catch (error) {
                console.log("Error has occured in connecting to", error);
        }
}
module.exports = Database()

mongoose.connect(Set07DB).then(()=>{
        console.log(`connctecd`);
}).catach((err)=>{
        console.log(err);
})