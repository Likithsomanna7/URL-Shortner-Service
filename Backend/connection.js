const mongoose  = require('mongoose')
async function connection(URL) 
{
    
    return mongoose.connect(URL).then(()=>console.log("connected to the database")).catch((err)=>console.log(err));

}
module.exports =connection;