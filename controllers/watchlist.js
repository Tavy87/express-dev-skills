// controllers/watchlist.js

module.exports = {
    index,
    show,
    new: newWatchlist,
    create,
    delete: deleteWatchlist
};

const Watchlist = require("../models/watchlist");

function index(req, res) {
    res.render("watchlist/index", {
        watchlist: Watchlist.getAll(),
        title: "Must Watch Movies"
    });
}

function show(req, res) {
    res.render("watchlist/show", {
        watchlist: Watchlist.getOne(req.params.id),
        title: "List Of Movies"
    });
}

function newWatchlist(req, res) {
    res.render("watchlist/new", {title: "Movies"});
}

function create(req, res) {
    console.log(req.body);
    Watchlist.create(req.body);
    res.redirect("/watchlist");
}

function deleteWatchlist(req, res) {
    Watchlist.deleteOne(req.params.id);
    res.redirect('/watchlist');
}