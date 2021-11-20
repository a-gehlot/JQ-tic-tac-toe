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
    console.log("move made")
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
