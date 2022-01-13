var express = require("express");
var router = express.Router();
var furnitureDetailsModule = require('../module/furnitureDetailsModule');

router.get("/get", furnitureDetailsModule.getfurnitureDetails);


module.exports = router;