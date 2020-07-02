const boardModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

const winVertModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
]
const winHorizModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

const winDiagDownModel = [
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

const winDiagUpModel = [
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
]


const verticalWinner = function(model) {
    for (let row = 0; row < model.length - 3; row++) { //model.length-3 will test all rows except the last 3, since there can be no vertical wins beginning in those rows -Drew 7/1
        for (let column = 0; column < model[row].length; column++) { //function runs through every element in the row, because every column can hold a vertical win
            if (model[row][column] > 0 &&
                model[row][column] === model[row + 1][column] &&
                model[row][column] === model[row + 2][column] &&
                model[row][column] === model[row + 3][column]) {
                console.log('win')
                return true
            }
        }
    }
    return false
}

const horizontalWinner = function(model) {
    for (let row = 0; row < model.length; row++) { //model.length-3 will test all rows except the last 3, since there can be no vertical wins beginning in those rows -Drew 7/1
        for (let column = 0; column < model[row].length - 3; column++) { //function runs through every element in the row, because every column can hold a vertical win
            if (model[row][column] > 0 &&
                model[row][column] === model[row][column + 1] &&
                model[row][column] === model[row][column + 2] &&
                model[row][column] === model[row][column + 3]) {
                console.log('win')
                return true
            }
        }
    }
    return false
}

const diagDownWinner = function(model) {
    for (let row = 0; row < model.length - 3; row++) { //model.length-3 will test all rows except the last 3, since there can be no vertical wins beginning in those rows -Drew 7/1
        for (let column = 0; column < model[row].length - 3; column++) { //function runs through every element in the row, because every column can hold a vertical win
            if (model[row][column] > 0 &&
                model[row][column] === model[row + 1][column + 1] &&
                model[row][column] === model[row + 2][column + 2] &&
                model[row][column] === model[row + 3][column + 3]) {
                console.log('win')
                return true
            }
        }
    }
    return false
}

const diagUpWinner = function(model) {
    for (let row = 3; row < model.length; row++) { //model.length-3 will test all rows except the last 3, since there can be no vertical wins beginning in those rows -Drew 7/1
        for (let column = 0; column < model[row].length - 3; column++) { //function runs through every element in the row, because every column can hold a vertical win
            if (model[row][column] > 0 &&
                model[row][column] === model[row - 1][column + 1] &&
                model[row][column] === model[row - 2][column + 2] &&
                model[row][column] === model[row - 3][column + 3]) {
                console.log('win')
                return true
            }
        }
    }
    return false
}

function testAllWinners(model) {
    if (horizontalWinner(model) ||
        verticalWinner(model) ||
        diagDownWinner(model) ||
        diagUpWinner(model)) {
        alert(`Player ${currentPlayer} wins!!`)
    }

}

let gameBoard = document.getElementById('gameBoard')
let column = document.getElementsByClassName('column')
let rows = document.getElementsByClassName('row')
let currentPlayer = 'red'
let discsDropped = 0;
let redDisc = document.createElement('div')
redDisc.className = 'redDisc'
let blackDisc = document.createElement('div')
blackDisc.className = 'blackDisc'
let numberOfDiscsDropped = 0
let redClone = redDisc.cloneNode(true)
let blackClone = blackDisc.cloneNode(true)
let playerSpan = document.getElementById('playerSpan')
playerSpan.textContent = currentPlayer


const buildBoard = function(model) {
    let rowCount = 0
    let cellCount = 0
    for (let row of model) {
        cellCount = 0
        let newRow = gameBoard.insertRow(-1)
        newRow.className = `row`
        newRow.id = `row${rowCount}`
        for (let cell of row) {
            let newCell = newRow.insertCell(-1)
            newCell.addEventListener('click', handleClick)
            newCell.id = `row${rowCount}`
            if (cell === 0) {
                newCell.className = 'cell blue'
            } else if (cell === 1) {
                newCell.className = 'cell red'
            } else if (cell === 2) {
                newCell.className = 'cell black'
            }
            cellCount++
        }
        rowCount++
    }
}
buildBoard(boardModel)
    //     //Hardcoded AF, but works

let col0 = document.querySelector('#col0')
let col1 = document.querySelector("#col1")
let col2 = document.querySelector("#col2")
let col3 = document.querySelector("#col3")
let col4 = document.querySelector("#col4")
let col5 = document.querySelector("#col5")
let col6 = document.querySelector("#col6")

let blackPiece = document.querySelector("#blackPiece")
let redPiece = document.querySelector("#redPiece")
let a = 5
let b = 0
let c = 5
let d = 1
let e = 5
let f = 2
let g = 5
let h = 3
let k = 5
let l = 4
let m = 5
let n = 5
let o = 5
let p = 6

// col0.addEventListener("click", col0clickHandler)

function col0clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[a][b] = 1
        a--
        console.log(a)
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[a][b] = 2
        a--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col1.addEventListener("click", col1clickHandler)

function col1clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[c][d] = 1
        c--
        testAllWinners(boardModel)
        switchToNextPlayer()

    } else if (currentPlayer === 'black') {
        boardModel[c][d] = 2
        c--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col2.addEventListener("click", col2clickHandler)

function col2clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[e][f] = 1
        e--
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[e][f] = 2
        e--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col3.addEventListener("click", col3clickHandler)

function col3clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[g][h] = 1
        g--
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[g][h] = 2
        g--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col4.addEventListener("click", col4clickHandler)

function col4clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[k][l] = 1
        k--
        playerSpan.textContent = currentPlayer
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[k][l] = 2
        k--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col5.addEventListener("click", col5clickHandler)

function col5clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[m][n] = 1
        m--
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[m][n] = 2
        m--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}
// col6.addEventListener("click", col6clickHandler)

function col6clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[o][p] = 1
        o--
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[o][p] = 2
        o--
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

const resetBoard = function(model) {
    let cells = document.getElementsByClassName('cell');
    for (cell of cells) {
        cell.id = 'blue'
    }
    for (let row of model) {
        for (let element of row) {
            element = 0
        }
    }
    currentPlayer = 1
}


const switchToNextPlayer = function() {
    if (currentPlayer === 'red') {
        currentPlayer = 'black'
        document.body.style.backgroundColor = 'black'
    } else if (currentPlayer === 'black') {
        currentPlayer = 'red'
        document.body.style.backgroundColor = 'darkred'
    } else { alert('player Unknown') }
    //     TODO: Toggle currentPlayer variable 1<-->2
    playerSpan.textContent = currentPlayer
    discsDropped++
    console.log(`${discsDropped} discs dropped`)
    if (discsDropped === 42 &&
        !testAllWinners()) {
        alert("It's a tie!")
    }
}

const displayMessage = function(message) {
    // Clear out the message div
    // Add new message to div
}

const isColumnFull = function(colNum) {

    // TODO: Look at the boardModel to determine if col is full
    return false // or true
}


const isGameOver = function(model) {
    // Check for a win
    // Check for a tie (numberofDiscsDropped === 42)
    return false // false, "tie", "win"
}

const displayTieMessage = function() {
    displayMessage("Tie game!")
}

const displayWinMessage = function() {
    displayMessage("Winner is _____")
}



function handleClick(event) {
    let column = event.target.cellIndex
    let row = event.currentTarget.id.slice(-1)
    console.log('column:' + column)
    console.log('row:' + row)
    console.log(`array location [${column},${row}]`)
    switch (column) {
        case 0:
            col0clickHandler();
            break;
        case 1:
            col1clickHandler();
            break;
        case 2:
            col2clickHandler();
            break;
        case 3:
            col3clickHandler();
            break;
        case 4:
            col4clickHandler();
            break;
        case 5:
            col5clickHandler();
            break;
        case 6:
            col6clickHandler();
    }
    gameBoard.innerHTML = ''
    buildBoard(boardModel)
}