const express = require("express") ;
const app = express() ;
require("dotenv").config() ;

const main = require("./src/config/db") ;
app.use(express.json()) ;

// Importing Routers
const formRouter = require("./src/routes/form_route") ;

app.use("/form" , formRouter) ;


const initializeConnection = async ()=>{

    try{
        await main() ;
        console.log("DB Connected") ;
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    }
    catch(err)
    {
        console.log("Error : " + err) ;
    }
}

initializeConnection() ;