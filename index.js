// setting

let MoveSide = 'UP'

let Speed = 500

let Score = 0

// setting

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

  ctx.fillStyle = '#ff7675'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)
}

let DrawTail = (X, Y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#ff7675b8'

  ctx.fillRect(16 * X, 16 * Y, 16, 16)
}

let Clear = () => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 400, 400) //clear all
}

class Apple {
  constructor(X, Y) {
    this.X = X
    this.Y = Y
  }
  DrawApple = () => {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = '#55efc4'

    ctx.fillRect(16 * this.X, 16 * this.Y, 16, 16)
  }

  IsScore = () => {
    Score += 100
  }

  Colison = (x1, y1) => {
    if (this.X === x1 && this.Y === y1) {
      this.IsScore()
      return true
    }
    return false
  }
}

let main = () => {
  let PlayerSnake = new Snake(5, 5, 1)
  let SnakeTail = [new Tail()]

  let PlayerApple = new Apple(6, 6)

  Draw(PlayerSnake.X, PlayerSnake.Y)

  //Move fn

  let Move = () => {
    SnakeTail[0].X = PlayerSnake.X
    SnakeTail[0].Y = PlayerSnake.Y

    if (MoveSide === 'UP') PlayerSnake.Y += -1

    if (MoveSide === 'DOWN') PlayerSnake.Y += 1

    if (MoveSide === 'RIGHT') PlayerSnake.X += -1

    if (MoveSide === 'LEFT') PlayerSnake.X += 1

    Clear()

    if (PlayerApple.Colison(PlayerSnake.X, PlayerSnake.Y)) {
      SnakeTail.push(new Tail())
    }

    PlayerApple.DrawApple()
    Draw(PlayerSnake.X, PlayerSnake.Y)
    DrawTail(SnakeTail[0].X, SnakeTail[0].Y)

    PrintInfo()
  }

  //PrintInfo

  let PrintInfo = () => {
    document.getElementById('x').innerHTML = PlayerSnake.X
    document.getElementById('y').innerHTML = PlayerSnake.Y

    document.getElementById('score').innerHTML = Score
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
