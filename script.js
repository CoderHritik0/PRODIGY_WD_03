let gameOverSound = new Audio("src/gameOver.mp3");
let turnSound = new Audio("src/turnSound.mp3");
let turn = 'X';
let isGameOver = false;

const changeTurn = () => {
    return turn === 'X'?'O':'X'
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
            isGameOver = true;
            gameOverSound.play();
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

// let reset = document.getElementById('reset');
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = 'X'
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;

})