class Snake {
  constructor(X, Y, SnakeLen) {
    this.X = X
    this.Y = Y
    this.SnakeLen = SnakeLen
  }
}

let Draw = (X, Y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 400, 400)
  ctx.fillStyle = '#ff7675'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)

  //   for (let i = 1; i < 5; i++) {
  //     ctx.fillRect(16 * i, 16 * i, 16, 16)
  //   }
}

let main = () => {
  let PlayerSnake = new Snake(5, 5)
  Draw(PlayerSnake.X, PlayerSnake.Y)

  //Event

  document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
      PlayerSnake.Y += -1
      Draw(PlayerSnake.X, PlayerSnake.Y)
    }
    if (e.key === 's') {
      PlayerSnake.Y += 1
      Draw(PlayerSnake.X, PlayerSnake.Y)
    }
    if (e.key === 'a') {
      PlayerSnake.X += -1
      Draw(PlayerSnake.X, PlayerSnake.Y)
    }
    if (e.key === 'd') {
      PlayerSnake.X += 1
      Draw(PlayerSnake.X, PlayerSnake.Y)
    }

    // console.log(e)
    document.getElementById('KeyPress').innerHTML = e.key
      .toString()
      .toUpperCase()
    // document.getElementById('xy').innerHTML =
    //   'X: ' + PlayerSnake.X + ' Y: ' + PlayerSnake.Y

    document.getElementById('x').innerHTML = PlayerSnake.X
    document.getElementById('y').innerHTML = PlayerSnake.Y
  })
}

main()
