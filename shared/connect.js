const mongoose = require("mongoose")
exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://lakshmi:Hf90Oj4dW1p1O1Qw@cluster0.j1d6d.mongodb.net/integra?retryWrites=true&w=majority"');
        console.log("MongoDB Connected")
    } catch(err) {
        console.log(err);
    }
}
