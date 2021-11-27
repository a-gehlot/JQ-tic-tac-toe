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
    if ($square.hasClass("marked")) {
      alert("This is an invalid move!")
    } else {
      $square.html(`${this.game.currentPlayer}`)
      this.game.playMove(posArr)
      $square.addClass("marked")
      this.game.board.print();
    }
    if (this.game.isOver()) {
      let winner = this.game.winner() || "Nobody"
      $(`<b>${winner} has won this time!</b>`).addClass('winner-text').appendTo('body')
      $("li").unbind("click")
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
