// ------ Making start game button ------

const board = document.getElementById('board')
const startGameBtn = document.getElementById('start_game_btn')
startGameBtn.addEventListener('click', startGame)

let cells = []

// ------ function to set up game board ------

function startGame () {
    startGameBtn.remove()
    const grid = document.createElement('div')
    grid.classList.add('grid')
    board.appendChild(grid)
    
    // ------ loop to make grid ------
    
    for(let i = 1; i <= 9; i++) {
        const cell = document.createElement('div')
        //cell.addEventListener('click', makeMove)
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