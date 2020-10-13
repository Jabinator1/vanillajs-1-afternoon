let board = []

let testArr = ["0","0","0","0","4","5","0","7","8"]

function play(clickedId) {
    let playerSpan = document.getElementById("player")
    let clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
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
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;

  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull) {
    alert("Cat's game, there is no winner");
  }
}




