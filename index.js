// setting

let MoveSide = 'UP'

let Speed = 500

let Score = 0

let SnakeLen = 0

// setting

class Snake {
  constructor(x, y) {
    this.x = x
    this.y = y
    // this.SnakeLen = this.SnakeLen
    this.SnakeTails = [SnakeLen]
  }
}

class Tail {
  oldx = null
  oldy = null
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  SetPosition = (x1, y1) => {
    // if (this.oldx != null && this.oldy != null) {
    //   this.oldx = this.x
    //   this.oldy = this.y
    // }

    this.oldx = this.x
    this.oldy = this.y

    this.x = x1
    this.y = y1
  }
}

let Draw = (x, y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#ff7675'

  ctx.fillRect(16 * x, 16 * y, 16, 16)
}

let DrawTail = (x, y) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#75ffff17'

  ctx.fillRect(16 * x, 16 * y, 16, 16)
}

let DrawTail1 = (mass) => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#75ffff17'
  console.log(mass)
  for (let i = 0; i < mass.len; i++) {
    ctx.fillRect(16 * x, 16 * y, 16, 16)
  }
}

let Clear = () => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 400, 400) //clear all
}

class Apple {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  DrawApple = () => {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = '#55efc4'

    ctx.fillRect(16 * this.x, 16 * this.y, 16, 16)
  }

  IsScore = () => {
    Score += 100
  }

  Colison = (x1, y1) => {
    if (this.x === x1 && this.y === y1) {
      this.IsScore()
      this.setRandomPosition()
      return true
    }
    return false
  }

  setRandomPosition = () => {
    this.x = Math.floor(Math.random() * 24)
    this.y = Math.floor(Math.random() * 24)
  }
}

let main = () => {
  let PlayerSnake = new Snake(5, 5)
  let SnakeTail = []

  let PlayerApple = new Apple(6, 6)

  Draw(PlayerSnake.x, PlayerSnake.y)

  //Move fn

  let Move = () => {
    // Установка позицы
    let SnakeTailPosition = () => {
      for (let i = 0; i < SnakeLen; i++) {
        SnakeTail[0].SetPosition(PlayerSnake.x, PlayerSnake.y)
        if (!i == 0) {
          // SnakeTail[0].x = PlayerSnake.x
          // SnakeTail[0].y = PlayerSnake.y

          SnakeTail[i].SetPosition(SnakeTail[i - 1].x, SnakeTail[i - 1].y)
        } else {
        }
      }
    }

    SnakeTailPosition()

    if (MoveSide === 'UP') PlayerSnake.y += -1

    if (MoveSide === 'DOWN') PlayerSnake.y += 1

    if (MoveSide === 'RIGHT') PlayerSnake.x += -1

    if (MoveSide === 'LEFT') PlayerSnake.x += 1

    Clear()

    if (PlayerApple.Colison(PlayerSnake.x, PlayerSnake.y)) {
      console.log('score + 100')

      SnakeTail.push(new Tail(PlayerSnake.x, PlayerSnake.y))
      SnakeLen += 1
    }
    console.log(SnakeTail)
    
    for (let i = 0; i < SnakeLen; i++) {
      // console.log(
      //   'SnakeTail = ' + i + ' x= ' + SnakeTail[i].x + ' y= ' + SnakeTail[i].y
      // )
      // if (i == 0) {
      //   DrawTail(SnakeTail[i].x, SnakeTail[i].y)
      // } else {
      //   DrawTail(SnakeTail[i].oldx, SnakeTail[i].oldy)
      // }

      DrawTail(SnakeTail[i].x, SnakeTail[i].y)
    }

    // DrawTail1(SnakeTail)

    PlayerApple.DrawApple()
    Draw(PlayerSnake.x, PlayerSnake.y)

    PrintInfo()
  }

  //PrintInfo

  let PrintInfo = () => {
    document.getElementById('x').innerHTML = PlayerSnake.x
    document.getElementById('y').innerHTML = PlayerSnake.y

    document.getElementById('lenspan').innerHTML = SnakeLen

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
