let map = []
let currentPlayer = 'red';
let discsDropped = 0;

//code below borrowed from Randy and edited by us

const displayMessage = function(message) {
    // Clear out the message div
    // Add new message to div
}

const displayCurrentPlayer = function(playerNum) {
    displayMessage("Current player: " + playerNum)
}

const isColumnFull = function(colNum) {
    // TODO: Look at the boardModel to determine if col is full
    return false // or true
}

const dropDisc = function(colNum) {
    // TODO: Add a disc to the DOM for the current player
    // <div class="disc red"></div>

    // TODO: Add a disc to the boardModel
    numberOfDiscsDropped++
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

const switchToNextPlayer = function() {
    //     TODO: Toggle currentPlayer variable 1<-->2
}

const columnClickHandler = function(eventObj) {
    const selectedCol = eventObj.currentTarget
    const columnNum = Number(selectedCol.id.slice(-1))
    if (isColumnFull(columnNum)) {
        // display a message saying they can't drop there
    } else {
        dropDisc(columnNum)

        const gameStatus = isGameOver(boardModel)
        if (gameStatus === "tie") {
            displayTieMessage()
        } else if (gameStatus === "win") {
            displayWinMessage()
        } else {
            switchToNextPlayer()
        }
    }
}

const setUpEventListeners = function() {
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const initializeGame = function() {
    setUpEventListeners()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()