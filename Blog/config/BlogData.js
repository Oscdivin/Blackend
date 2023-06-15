const BlogData = exprees =require("express")

const  Set07DB1 = ""

const Database = async()=>{
        try {
                const dbconnact = await BlogData.connect(Set07DB1)
console.log(`server is on and runnung, ${dbconnact.connection.host}`);
        } catch (error) {
                console.log("sever can not connect", err);
        }
}

export default BlogData();

try {
        
} catch (error) {
        
}


