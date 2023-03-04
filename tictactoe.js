console.log("Welcome to tic tac toe");
let turnvoice = new Audio("larger-wine-glass-37877.mp3");
let gameovervoice = new Audio("083822_8-bit-quotgame-overquot-82872.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X"?"0": "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
     let wins =  [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
     ]
     wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = "Congratulations! " + boxtext[e[0]].innerText + " Won...!"
            gameover = true
            gameovervoice.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.getElementById('reset').innerText = "Replay";
            document.querySelector(".line").style.width ="20vw";
            document.querySelector(".line").style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }

        
     })
}

// game logic

let boxes  = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnvoice.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           
        }
    })
});

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.querySelector(".line").style.width ="0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById('reset').innerText = "Reset";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})