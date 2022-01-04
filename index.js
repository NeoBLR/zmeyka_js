class Snake {
  constructor(X, Y, SnakeLen) {
    this.X = X
    this.Y = Y
    this.SnakeLen = SnakeLen
    this.SnakeTails = [SnakeLen]
  }
}

class Tail {
  constructor(X, Y) {
    this.X = X
    this.Y = Y
  }
}

let Draw = (X, Y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 400, 400) //clear all
  ctx.fillStyle = '#ff7675'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)

  //   for (let i = 1; i < 5; i++) {
  //     ctx.fillRect(16 * i, 16 * i, 16, 16)
  //   }
}

let DrawTail = (X, Y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  //   ctx.clearRect(0, 0, 400, 400) //clear all
  ctx.fillStyle = '#ff7675b8'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)

  //   for (let i = 1; i < 5; i++) {
  //     ctx.fillRect(16 * i, 16 * i, 16, 16)
  //   }
}

let DrawSnake = (X, Y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 400, 400)

  ctx.fillStyle = '#ff7675'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)
}

// setting

let MoveSide = 'UP'

let Speed = 1000

// setting

let main = () => {
  let PlayerSnake = new Snake(5, 5, 1)
  let SnakeTail = new Tail()

  Draw(PlayerSnake.X, PlayerSnake.Y)

  //Move fn

  let Move = () => {
    SnakeTail.X = PlayerSnake.X
    SnakeTail.Y = PlayerSnake.Y

    if (MoveSide === 'UP') PlayerSnake.Y += -1

    if (MoveSide === 'DOWN') PlayerSnake.Y += 1

    if (MoveSide === 'RIGHT') PlayerSnake.X += -1

    if (MoveSide === 'LEFT') PlayerSnake.X += 1

    Draw(PlayerSnake.X, PlayerSnake.Y)
    DrawTail(SnakeTail.X, SnakeTail.Y)

    PrintInfo()
  }

  //PrintInfo

  let PrintInfo = () => {
    document.getElementById('x').innerHTML = PlayerSnake.X
    document.getElementById('y').innerHTML = PlayerSnake.Y
  }

  //loop

  let MoveLoop = setInterval(() => {
    Move()
  }, Speed)

  //Event

  document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
      MoveSide = 'UP'
    }
    if (e.key === 's') {
      MoveSide = 'DOWN'
    }
    if (e.key === 'a') {
      MoveSide = 'RIGHT'
    }
    if (e.key === 'd') {
      MoveSide = 'LEFT'
    }

    document.getElementById('KeyPress').innerHTML = e.key
      .toString()
      .toUpperCase()
  })
}

main()
