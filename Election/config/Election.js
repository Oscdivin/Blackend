const expess = require("express")

const Set07DB1= ""

const Election =async(Set07DB1)=>{
        try {
                const dbconnact = await Election.connect(Set07DB1)
                console.log(`Database is now running, ${dbconnact.connection.host}`);
        } catch (error) {
                console.log(`Err has been seen`,err);
        }
}

module.export= Election();