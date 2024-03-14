let gameBox = document.querySelector('main');
let box = document.querySelectorAll('.box')
let boxValues = ["", "", "", "", "", "", "", "", ""];
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let running = true;
let currentPlayer = ['BLUE', 'X']
let gameStatus = document.querySelector('#gameStatus');

let winLine = document.querySelector('#winLine');

(function hii() {
    box.forEach(element => {
        element.addEventListener('click', boxClicked);
        gameStatus.innerHTML = `${currentPlayer[0]}'s turn`
    });
})()
function boxClicked() {
    let boxNum = this.getAttribute('boxNum');
    if (this.innerHTML !== '' || !running) {
        return;
    }
    this.innerHTML = currentPlayer[1];
    boxValues[boxNum] = currentPlayer[1];
    this.style.color = currentPlayer[0];
    gameBox.style.backgroundColor = '';
    checkWinner()
}
function checkWinner() {
    let someWon = false;
    let whoWon;
    let condition;
    for (i = 0; i < winCondition.length; i++) {
        condition = winCondition[i];
        let number1 = boxValues[condition[0]]
        let number2 = boxValues[condition[1]]
        let number3 = boxValues[condition[2]]
        if (number1 == '' || number2 == '' || number3 == '') {
            continue;
        }
        if (number1 == number2 && number2 == number3) {
            someWon = true;
            whoWon = currentPlayer[0];
            break;
        }
    }
    if (someWon) {
        running = false;
        gameStatus.innerHTML = `${currentPlayer[0]} won`
        animatedLine(condition, whoWon);
        particles();
    }
    else if (!boxValues.includes('')) {
        gameStatus.innerHTML = `Draw!`
        running = false;
    }
    else {
        currentPlayer = (currentPlayer[1] == 'X') ? ['RED', 'O'] : ['BLUE', 'X'];
        gameStatus.innerHTML = `${currentPlayer[0]}'s turn`
        if (currentPlayer[0] == 'BLUE') {
            gameBox.style.backgroundColor = '#0000ff80';
        }
        else if(currentPlayer[0] == 'RED'){
            gameBox.style.backgroundColor = '#ff000080';
        }
    }
}
function animatedLine(x, winner) {
    let winIndex;
    for (let i = 0; i < winCondition.length; i++) {
        if (winCondition[i] == x) {
            winIndex = i + 1;
        }
    }
    winLine.style.scale = '1 1'
    winLine.style.background = `${winner}`
    if (winIndex == 1) {
        winLine.style.left = '50%';
        winLine.style.top = '40px';
        winLine.style.transform = 'translate(-50%, -50%) rotate(90deg)'
    }
    else if (winIndex == 2) {
        winLine.style.left = '50%';
        winLine.style.top = '120px';
        winLine.style.transform = 'translate(-50%, -50%) rotate(90deg)'
    }
    else if (winIndex == 3) {
        winLine.style.left = '50%';
        winLine.style.top = '200px';
        winLine.style.transform = 'translate(-50%, -50%) rotate(90deg)'
    }
    else if (winIndex == 4) {
        winLine.style.left = '40px';
        winLine.style.top = '50%';
        winLine.style.transform = 'translate(-50%, -50%) rotate(0deg)'
    }
    else if (winIndex == 5) {
        winLine.style.left = '120px';
        winLine.style.top = '50%';
        winLine.style.transform = 'translate(-50%, -50%) rotate(0deg)'
    }
    else if (winIndex == 6) {
        winLine.style.left = '200px';
        winLine.style.top = '50%';
        winLine.style.transform = 'translate(-50%, -50%) rotate(0deg)'
    }
    else if (winIndex == 7) {
        winLine.style.left = '50%';
        winLine.style.top = '50%';
        winLine.style.transform = 'translate(-50%, -50%) rotate(135deg)'
    }
    else if (winIndex == 8) {
        winLine.style.left = '50%';
        winLine.style.top = '50%';
        winLine.style.transform = 'translate(-50%, -50%) rotate(225deg)'
    }
}
function particles(){
    let particles = document.getElementById('particles-js')
    particles.style.animation = 'animate 1s'
}