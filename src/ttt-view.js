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
    let posArr = $square.data("data-pos");
    let color = "red"
    if ($square.hasClass("marked")) {
      alert("This is an invalid move!")
    } else {
      this.game.playMove(posArr)
      $square.html(`<h1>${this.game.currentPlayer}</h1>`).css("color", color)
      $square.addClass("marked")
    }
    if (this.game.isOver()) {
        $(`<div>${this.game.currentPlayer} has won</div>`).addClass('winner-text').appendTo('body')
        return;
    }
  }

  setupBoard() {
    this.$el.append("<ul>");
    let $ul = this.$el.find("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $ul.append("<li>")
        let $appended_item = $("ul li").last();
        $appended_item.data("data-pos", [i, j]);
      }
    }
    this.bindEvents();
  }

}


module.exports = View;
