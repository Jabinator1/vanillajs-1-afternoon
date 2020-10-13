let board = []

function play(clickedId) {
    let playerSpan = document.getElementById("player")
    let clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === "X") {
        if (clickedElement.innerText == "") {
          playerSpan.innerText = "O"
          clickedElement.innerText = "X"
          board[clickedId] = "X"
        }
        
    } else {
        if (clickedElement.innerText == "") {
          clickedElement.innerText = "O"
          playerSpan.innerText = "X"
          board[clickedId] = "O"
        }
        
    }

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    win(topLeft)
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    win(middleLeft)
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    win(bottomLeft)
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    win(topLeft)
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    win(topCenter)
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    win(topRight)
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    win(topLeft)
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    win(bottomLeft)
  }

  let boardFull = true;

  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull) {
    alert("Cat's game, there is no winner");
    resetBoard()
  }
}

function resetBoard() {
  location.reload()
}

function win(letter) {
  alert(`${letter} is the winner`)
  resetBoard()
  return
}