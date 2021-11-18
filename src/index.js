const View = require("./ttt-view")
const Game = require("./../solution/game")

new Game();

  $(() => {
    // Your code here
    const $root = $(".ttt");
    new View(this, $root)
  });
