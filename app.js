let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');

let trunO = true;
let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log(`box was clicked`);
       if(trunO){
        box.innerText = "O";
        trunO = false;
       }else{
        box.innerText = "X";
        trunO = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML =  `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winningPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    };

};


const resetGame = () => {
    trunO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);