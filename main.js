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
                return true
            }
        }
    }
    return false
}

const horizontalWinner = function(model) {
    for (let row = 0; row < model.length; row++) { //for horizontal, we can go through all rows
        for (let column = 0; column < model[row].length - 3; column++) { //but all but the last 3 cells in that row, because a horizontal win can't begin in the last 3 cells of each row
            if (model[row][column] > 0 &&
                model[row][column] === model[row][column + 1] &&
                model[row][column] === model[row][column + 2] &&
                model[row][column] === model[row][column + 3]) {
                return true
            }
        }
    }
    return false
}

const diagDownWinner = function(model) {
    for (let row = 0; row < model.length - 3; row++) { //model.length-3 will test all rows except the last 3, since there can be no diagonal down wins beginning in those rows -Drew 7/1
        for (let column = 0; column < model[row].length - 3; column++) { //since it's testing diagonally, there can also be no wins beginning in the last 3 cells of each row
            if (model[row][column] > 0 &&
                model[row][column] === model[row + 1][column + 1] &&
                model[row][column] === model[row + 2][column + 2] &&
                model[row][column] === model[row + 3][column + 3]) {
                return true
            }
        }
    }
    return false
}

const diagUpWinner = function(model) {
    for (let row = 3; row < model.length; row++) { //row starts at 3, because you can not have any diagonal up winning combos starting in the first 3 rows
        for (let column = 0; column < model[row].length - 3; column++) { //but we do not need to test the last 3 cells of each row, because there can not be a diagonal up winning combo starting in those columns
            if (model[row][column] > 0 &&
                model[row][column] === model[row - 1][column + 1] &&
                model[row][column] === model[row - 2][column + 2] &&
                model[row][column] === model[row - 3][column + 3]) {
                return true
            }
        }
    }
    return false
}

function testAllWinners(model) { //combines all winning tests, based on an input of model (in our case, the model will be boardModel, which is what we're editing with each move)
    if (horizontalWinner(model) ||
        verticalWinner(model) ||
        diagDownWinner(model) ||
        diagUpWinner(model)) {
        setTimeout(alert, 100, `Player ${currentPlayer} wins!!`)
        return true
    }
}

let gameBoard = document.getElementById('gameBoard')
let column = document.getElementsByClassName('column')
let rows = document.getElementsByClassName('row')
let currentPlayer = 'red'
let discsDropped = 0;
let playerSpan = document.getElementById('playerSpan')
playerSpan.textContent = currentPlayer


const buildBoard = function(model) {
    let rowCount = 0 //keeps track of how many rows are in the game
    let cellCount = 0 //keeps track of how many cells/columns are in each row
    for (let row of model) {
        cellCount = 0 //on a new row, the cell/column count will reset to 0
        let newRow = gameBoard.insertRow(-1)
        newRow.className = `row`
        newRow.id = `row${rowCount}` //this will help later when we need to extract which row we click on
        for (let cell of row) {
            let newCell = newRow.insertCell(-1)
            newCell.addEventListener('click', handleClick)
            newCell.id = `row${rowCount}`
            if (cell === 0) {
                newCell.className = 'cell blue' //two class names in each of these, so that the cells will be able to be styled based on general 'cell' styling, as well as the specific color
            } else if (cell === 1) {
                newCell.className = 'cell red'
            } else if (cell === 2) {
                newCell.className = 'cell black'
            }
            cellCount++ //increment cell/column count in the inner for loop so that it will increase with each row element
        }
        rowCount++ //increment row each time the outer loop starts a new row
    }
}
buildBoard(boardModel)
    //     //Hardcoded AF, but works

// let col0 = document.querySelector('#col0')
// let col1 = document.querySelector("#col1")
// let col2 = document.querySelector("#col2")
// let col3 = document.querySelector("#col3")
// let col4 = document.querySelector("#col4")
// let col5 = document.querySelector("#col5")
// let col6 = document.querySelector("#col6")

// let blackPiece = document.querySelector("#blackPiece")
// let redPiece = document.querySelector("#redPiece")
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

function col0clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[a][b] = 1
        a--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[a][b] = 2
        a--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col1clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[c][d] = 1
        c--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()

    } else if (currentPlayer === 'black') {
        boardModel[c][d] = 2
        c--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col2clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[e][f] = 1
        e--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[e][f] = 2
        e--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col3clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[g][h] = 1
        g--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[g][h] = 2
        g--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col4clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[k][l] = 1
        k--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[k][l] = 2
        k--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col5clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[m][n] = 1
        m--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[m][n] = 2
        m--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    }
}

function col6clickHandler() {
    if (currentPlayer === 'red') {
        boardModel[o][p] = 1
        o--
        testForTie()
        testAllWinners(boardModel)
        switchToNextPlayer()
    } else if (currentPlayer === 'black') {
        boardModel[o][p] = 2
        o--
        testForTie()
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
    currentPlayer = 'red'
}


const switchToNextPlayer = function() {
    if (currentPlayer === 'red') {
        currentPlayer = 'black'
        document.body.style.backgroundColor = 'black'
    } else if (currentPlayer === 'black') {
        currentPlayer = 'red'
        document.body.style.backgroundColor = 'darkred'
    } else { alert('player Unknown') }
    playerSpan.textContent = currentPlayer //updates player indicator at the top of the board to show who's turn it is
    discsDropped++ //updates the number of discs dropped, which should help with our tie indicator
}

function testForTie() {
    if (discsDropped === 42 && //if 42 discs have been placed, there are no more moves
        (!testAllWinners(boardModel))) { //if the above is true, and there are no winners, send the following alert --this isn't working right yet.
        alert("It's a tie!")
        return true
    }
}

function handleClick(event) {
    let column = event.target.cellIndex //since it is structured as a table, each row element has an available index to see which column/cell of that row you have clicked
    console.log(event.target.id)
    switch (column) { //this switch statement takes the column number we identified with the previous variable, and runs the applicable click handler based on which column the clicked element resides in
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
    gameBoard.innerHTML = '' //removes current board to make room for updated board
    buildBoard(boardModel) //rebuilds board with current disc placements
}