const furnitureDetailsVar = require("../models/furnitureModel");
const { ObjectId } = require("bson");

module.exports.getfurnitureDetails = async (req, res, next) => {
  try {
    var data = await furnitureDetailsVar.find();
    res.send(data);
  } catch {
    console.log(err);
    res.status(500).send(err);
  }
};