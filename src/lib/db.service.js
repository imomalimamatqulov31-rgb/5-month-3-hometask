const { default: mongoose } = require("mongoose");  

async function dbConenction(){

    try {
        
        await mongoose.connect(process.env.Dburi);
        console.log("db connected");
    } catch (err) {
        throw new Error(`db connection error: ${err.message}`);
        
    }
}
module.exports = dbConenction;

   








