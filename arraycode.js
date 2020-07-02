//Hardcoded AF, but works

let col0 = document.querySelector('#col0')
let col1 = document.querySelector("#col1")
let col2 = document.querySelector("#col2")
let col3 = document.querySelector("#col3")
let col4 = document.querySelector("#col4")
let col5 = document.querySelector("#col5")
let col6 = document.querySelector("#col6")

const boardModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]


let currentPlayer = 'red';
let discsDropped = 0;
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

col0.addEventListener("click", col0clickHandler)

function col0clickHandler(evt) {


    if (currentPlayer === 'red') {
        boardModel[a][b] = 1
        a--
        console.log(a)
        currentPlayer = 'black'

    } else if (currentPlayer === 'black') {
        boardModel[a][b] = 2
        a--
        currentPlayer = 'red'
    }

}
col1.addEventListener("click", col1clickHandler)

function col1clickHandler(evt) {

    if (currentPlayer === 'red') {
        boardModel[c][d] = 1
        c--
        currentPlayer = 'black'
    } else if (currentPlayer === 'black') {
        boardModel[c][d] = 2
        c--
        currentPlayer = 'red'
    }
}

col2.addEventListener("click", col2clickHandler)

function col2clickHandler(evt) {

    if (currentPlayer === 'red') {
        boardModel[e][f] = 1
        e--
        currentPlayer = 'black'
    } else if (currentPlayer === 'black') {
        boardModel[e][f] = 2
        e--
        currentPlayer = 'red'
    }
}

col3.addEventListener("click", col3clickHandler)

function col3clickHandler(evt) {


    if (currentPlayer === 'red') {
        boardModel[g][h] = 1
        g--
        currentPlayer = 'black'

    } else if (currentPlayer === 'black') {
        boardModel[g][h] = 2
        g--

        currentPlayer = 'red'
    }
}

col4.addEventListener("click", col4clickHandler)

function col4clickHandler(evt) {


    if (currentPlayer === 'red') {
        boardModel[k][l] = 1
        k--
        currentPlayer = 'black'

    } else if (currentPlayer === 'black') {
        boardModel[k][l] = 2
        k--

        currentPlayer = 'red'
    }
}

col5.addEventListener("click", col5clickHandler)

function col5clickHandler(evt) {

    if (currentPlayer === 'red') {
        boardModel[m][n] = 1
        m--
        currentPlayer = 'black'

    } else if (currentPlayer === 'black') {
        boardModel[m][n] = 2
        m--

        currentPlayer = 'red'
    }
}

col6.addEventListener("click", col6clickHandler)

function col6clickHandler(evt) {


    if (currentPlayer === 'red') {
        boardModel[o][p] = 1
        o--
        currentPlayer = 'black'

    } else if (currentPlayer === 'black') {
        boardModel[o][p] = 2
        o--
        currentPlayer = 'red'
    }
}