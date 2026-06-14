let bookingModel = require("../models/bookingModel");

let addBooking =(req,res)=>{
    bookingModel.addBooking(req.body,res);
}
let addcontroller =(req,res)=>
{
    bookingModel.addBooking(req.body,res);
}
let getAllBooking=(req,res)=>
{
    bookingModel.getAllBooking(res);
}
let updateBooking=(req,res)=>{
    
    bookingModel.updateBooking(req.params.id,req.body,res)
}
let deleteController=(req,res)=>{
    
    bookingModel.deleteBooking(req.params.id,res)
}

module.exports = { addBooking ,getAllBooking, updateBooking,deleteController};

