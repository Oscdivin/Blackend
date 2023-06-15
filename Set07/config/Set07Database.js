const  expess = require("express")
const  Set07DB1 = ""

const  Set07Database = async(Set07DB1)=>{
        try {
                const dbconnact= await Set07DB1.connaction(Set07DB1)
                console.log(`server is on now, ${dbconnact.connact.host}`);
        } catch (error) {
                console.log("server  is off comeblack later", err);
        }
}

export default Set07Database;