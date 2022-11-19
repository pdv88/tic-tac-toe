const board = document.getElementById('board')
const startGameBtn = document.getElementById('start_game_btn')
startGameBtn.addEventListener('click', startGame)

let cells = []

function startGame () {
    startGameBtn.remove()
    const grid = document.createElement('div')
    grid.classList.add('grid')
    board.appendChild(grid)
    
    const cell = document.createElement('div')
    
    

}