// ------ Making start game button ------

const board = document.getElementById('board')
const setBoardBtn = document.getElementById('set_board_btn')
setBoardBtn.addEventListener('click', setBoard)


// ------ function to set up game board ------

function setBoard () {
    setBoardBtn.remove()
    const grid = document.createElement('div')
    grid.classList.add('grid')
    board.appendChild(grid)
    
    // ------ loop to make grid ------
    
    for(let i = 0; i <= 8; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('id', [i])
        cell.addEventListener('click', (event) => {
            playMove(event.target,data)
        })
        grid.appendChild(cell)
    }

    // ------ create options div and buttons ------

    const options = document.createElement('div')
    options.classList.add('options')
    board.appendChild(options)

    // ------ create player vs player button ------

    // const pvpBtn = document.createElement('button')
    // pvpBtn.classList.add('pvpBtn')
    // pvpBtn.textContent = "Player vs Player"
    // options.appendChild(pvpBtn)

    // // ------ create playes vs AI button ------

    // const pvcBtn = document.createElement('button')
    // pvcBtn.classList.add('pvcBtn')
    // pvcBtn.textContent = "Player vs AI"
    // options.appendChild(pvcBtn)

}

const data = {
    cells: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    player1: "X",
    player2: "O",
    round: 0,
    currentPlayer: "X",
    gameOver: false
}



const playMove = (cell, data) => {
    
    if(data.gameOver){
        return
    }

    if(cell.textContent === "X" || cell.textContent === "O"){
        return
    }
    
    cell.classList.add('jump')
    cell.textContent = `${data.currentPlayer}`
    data.round += 1
    data.currentPlayer === "X" ? data.currentPlayer = "O" : data.currentPlayer = "X"
    checkWinner(data)
} 

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const checkWinner = (data) => {
    const roundOutcome = document.createElement('h1')
    if (data.round === 9) {
        roundOutcome.textContent = "Its a tie"
        board.prepend(roundOutcome)
    }

}

