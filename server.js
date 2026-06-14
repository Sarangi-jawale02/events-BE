require("dotenv").config();
let express = require("express");
let cors = require("cors");
let bookingRoutes = require("./routes/bookingRoutes");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/",bookingRoutes);
app.listen(9000,()=>console.log("I am listening"));

let PORT = process.env.PORT||9000;
app.listen(PORT,()=>{
    console.log("Server running on port"+PORT);

});