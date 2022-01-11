var express = require("express");
var router = express.Router();
var roomDetailsModule = require('../module/roomDetailsModule');

router.get("/get", roomDetailsModule.getroomDetails);


module.exports = router;