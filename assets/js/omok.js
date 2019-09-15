document.addEventListener('DOMContentLoaded', function () {
  const canvas = $('#omok-canvas');
  const info = $('#omok-info');
  let i = 1;

  ~function process() {
    const rect = canvas.getBoundingClientRect();

    if (
      rect.bottom < 0 ||
      rect.top > innerHeight ||
      !canvas ||
      !canvas.parentNode.getAttribute('animated')
    ) return setTimeout(process, 1);

    try {
      game.stone.set(i + 1, ...AI(i + 1, game.stone.list));
    } catch (e) {
      game.stone.reset();
    }

    i = 1 - i;

    const winner = game.checkWin();

    if (winner) {
      i = 1;
      info.innerHTML = ['White', 'Black'][winner - 1] + ' Win!';
      game.stone.update();
    } else {
      info.innerHTML = 'Processing...';
      setTimeout(process, 1);
    }
  }();
});
