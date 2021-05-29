// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
// var shutup = document.getElementByClassName(".game-cell");
console.log(cellDivs)

// game Constants
xSymbol = '×';
oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter == 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    // shutup.style.cursor = "default";
    if (letter == 'x'){
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    }else{
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
    }
}

const checkGameStatus = () => {
    const _0 = cellDivs[0].classList[1];
    const _1 = cellDivs[1].classList[1];
    const _2 = cellDivs[2].classList[1];
    const _3 = cellDivs[3].classList[1];
    const _4 = cellDivs[4].classList[1];
    const _5 = cellDivs[5].classList[1];
    const _6 = cellDivs[6].classList[1];
    const _7 = cellDivs[7].classList[1];
    const _8 = cellDivs[8].classList[1];
    // console.log(_0, _1, _2, _3, _4, _5, _6, _7, _8);
    
    // check winner
    if(_0 && _0==_1 && _0==_2){
        // console.log(_0);
        handleWin(_0);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (_0 && _0==_4 && _0==_8){
        handleWin(_0);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (_0 && _0==_3 && _0==_6){
        handleWin(_0);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (_1 && _1==_4 && _1==_7){
        handleWin(_1);
        cellDivs[4].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (_2 && _2==_5 && _2==_8){
        handleWin(_2);
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (_2 && _2==_4 && _2==_6){
        handleWin(_2);
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (_3 && _3==_4 && _3==_5){
        handleWin(_3);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (_6 && _6==_7 && _6==_8){
        handleWin(_6);
        cellDivs[8].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (_0 &&_1 &&_2 &&_3 &&_4 &&_5 &&_6 &&_7 &&_8){
        statusDiv.innerHTML = 'Game is tied!';
    } else{
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
};



// Event Handlers
const handleReset = (e) => {
    gameIsLive=true;
    // shutup.style.cursor = "pointer";
    console.log(e);
    xIsNext = true;
    winner = null;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs){
        console.log(cellDiv);
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
};
const handleCellClick = (e) => {
    // console.log(e.target.classList);
    const classList = e.target.classList;
    // const location = e.target.classList[1];
    const location = classList[1];
    // console.log("Location:",location);

    if (!gameIsLive || classList[2]=='x' || classList[2]=='o'){
        return;
    }

    if (xIsNext){
        // console.log(e.target);
        classList.add('x');
        checkGameStatus();
    }
    else{
        // console.log(e.target);
        classList.add('o');
        checkGameStatus();
    }
}


// Event Listeners
resetDiv.addEventListener('click',handleReset);

for (const cellDiv of cellDivs){
    console.log(cellDiv);
    cellDiv.addEventListener('click',handleCellClick);
}