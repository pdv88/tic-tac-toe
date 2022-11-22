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
    
    for(let i = 1; i <= 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('id', [i])
        grid.appendChild(cell)
    }

    // ------ create options div and buttons ------

    const options = document.createElement('div')
    options.classList.add('options')
    board.appendChild(options)

    // ------ create player vs player button ------

    const pvpBtn = document.createElement('button')
    pvpBtn.classList.add('pvpBtn')
    pvpBtn.textContent = "Player vs Player"
    options.appendChild(pvpBtn)

    // ------ create playes vs AI button ------

    const pvcBtn = document.createElement('button')
    pvcBtn.classList.add('pvcBtn')
    pvcBtn.textContent = "Player vs AI"
    options.appendChild(pvcBtn)

}

const variables = (data) => {
    data.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    data.player1 = "X"
    data.player2 = "O"
    data.round = 0
    data.currentPlayer = "X"
    data.gameOver = false
}

const initializeGame = (data) => {
    variables(data)
}

