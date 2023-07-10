const watchlist = [
    { id: 125221, watchlist: "BeetleJuice", done: true },
    { id: 127902, watchlist: "Leon the Professional", done: false },
    { id: 139603, watchlist: "Goodfellas", done: false },
    { id: 125224, watchlist: "Clueless", done: true },
    { id: 127905, watchlist: "Jawbreaker", done: false },
    { id: 125226, watchlist: "The Craft", done: true },
    { id: 127907, watchlist: "Belle", done: false },
    { id: 139608, watchlist: "Paprika", done: false },
    { id: 139609, watchlist: "Spirited Away", done: false },
    { id: 125222, watchlist: "Akira", done: true },
    { id: 127908, watchlist: "Grave of the Fireflies", done: false },
    { id: 139600, watchlist: "A Slient Voice", done: false },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return watchlist;
}

function getOne(id) {
    id = parseInt(id);
    return watchlist.find((watchlist) => watchlist.id === id);
}

function create(watchlist) {
    watchlist.id = Date.now() % 1000000;
    watchlist.done = false;
    watchlist.push(watchlist);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = watchlist.findIndex(watchlist => watchlist.id === id);
    watchlist.splice(idx, 1);
  }
  