class View {
  constructor(game, $el) {
    this.$el = $el
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    this.$el.append("<ul>");
    let $ul = this.$el.find("ul");
    for (let i = 0; i < 9; i++) {
        $ul.append("<li>");
    }
  }

}


module.exports = View;
