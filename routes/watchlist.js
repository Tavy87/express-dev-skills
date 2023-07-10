var express = require('express');
var router = express.Router();

var watchlistCtrl = require("../controllers/watchlist");
const watchlist = require("../controllers/watchlist");

router.get("/", watchlistCtrl.index);
router.get("/new", watchlistCtrl.new);
router.get("/:id", watchlistCtrl.show);
router.post("/", watchlistCtrl.create);
router.delete('/:id', watchlistCtrl.delete);

module.exports = router;
