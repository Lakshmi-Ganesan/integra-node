const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const furnitureDetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
 
  price: {
    type: String,
    required: true,
  },
  warranty:{
      type:String,
      required:true,
  }
});
const furnitureDetailsModel = mongoose.model(
  "furnitureDetailsModel",
  furnitureDetailsSchema,
  "furnitureDetails"
);
module.exports = furnitureDetailsModel;