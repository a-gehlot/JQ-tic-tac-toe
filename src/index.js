const View = require("./ttt-view")
const Game = require("./../solution/game")

$(() => {
  // Your code here
  const root = $(".ttt");
  let game = new Game();
  new View(game, root)
});
