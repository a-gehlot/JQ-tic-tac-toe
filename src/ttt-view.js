class View {
  constructor(game, $el) {
    this.$el = $el
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {
    let self = this;
    let $li = $("li");
    $li.click(function() {
      self.makeMove($(this))
    })
  }

  makeMove($square) {
    let posArr = $square.attr("data-pos");
    let color = "red"
    if (this.game.currentPlayer === "o") {
      color = "green"
    }
    if ($square.hasClass("marked")) {
      alert("This is an invalid move!")
    } else {
      $square.html(`<h1>${this.game.currentPlayer}</h1>`).css("color", color)
      $square.addClass("marked")
      this.game.swapTurn();
    }
  }

  setupBoard() {
    this.$el.append("<ul>");
    let $ul = this.$el.find("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $ul.append("<li>")
        let $appended_item = $("ul li").last();
        $appended_item.attr("data-pos", [i, j]);
      }
    }
    this.bindEvents();
  }

}


module.exports = View;
