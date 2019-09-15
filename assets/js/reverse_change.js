
const rcScale = 10;
const rcBoard = Array(rcScale).fill().map(
  () => Array(rcScale).fill().map(
    () => Math.round(Math.random())
  )
);

document.addEventListener('DOMContentLoaded', function () {
  const canvas = $('#rc-canvas');
  const ctx = canvas.getContext('2d');
  const size = canvas.width / rcScale;

  function updateBlock(x, y) {
    rcBoard[x][y]  = !rcBoard[x][y];
    ctx.fillStyle = rcBoard[x][y]? '#000' : '#fff';
    ctx.fillRect(x * size, y * size, (x+1) * size, (y+1) * size);
  }

  function clickBlock(x, y) {
    if (x)
      updateBlock(x - 1, y);

    if (x != rcScale - 1)
      updateBlock(x + 1, y);

    if (y)
      updateBlock(x, y - 1);

    if (y != rcScale - 1)
      updateBlock(x, y + 1);
  }

  for (let x = 0; x < rcScale; x++) {
    for (let y = 0; y < rcScale; y++) {
      ctx.fillStyle = rcBoard[x][y]? '#000' : '#fff';
      ctx.fillRect(x * size, y * size, (x+1) * size, (y+1) * size);
    }
  }

  new Promise(res => {
    document.addEventListener('scroll', function () {
      if (canvas.parentNode.getAttribute('animated'))
        res();
    });
  }).then(() => {
    for (let x = 0; x < rcScale; x++) {
      for (let y = 0; y < rcScale; y++) {
        setTimeout(function () {
          clickBlock(x, y);
        }, x * rcScale + y * rcScale * rcScale);
      }
    }
  });
});
