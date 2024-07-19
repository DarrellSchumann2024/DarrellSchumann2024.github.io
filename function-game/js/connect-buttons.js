/*******************************************************************************
Hook up EventHandlers functions for on-screen movement buttons
*******************************************************************************/
let buttonLeft = document.getElementById('left');
buttonLeft.onclick = reactToMoveLeftButton;
let buttonRight = document.getElementById('right');
buttonRight.onclick = reactToMoveRightButton;
let buttonDown = document.getElementById('down');
buttonDown.onclick = reactToMoveDownButton;
let buttonUp = document.getElementById('up');
buttonUp.onclick = reactToMoveUpButton;

/*******************************************************************************
Hook up EventHandlers functions for on-screen jumping movement buttons
*******************************************************************************/
let buttonJumpUp = document.getElementById('jump-up');
buttonJumpUp.onclick = reactToJumpUpButton;
let buttonJumpDown = document.getElementById('jump-down');
buttonJumpDown.onclick = reactToJumpDownButton;
let buttonJumpRight = document.getElementById('jump-right');
buttonJumpRight.onclick = reactToJumpRightButton;
let buttonJumpLeft = document.getElementById('jump-left');
buttonJumpLeft.onclick = reactToJumpLeftButton;

/*******************************************************************************
Hook up EventHandlers functions for other buttons
*******************************************************************************/
let buttonAttack = document.getElementById('attack');
buttonAttack.onclick = reactToAttackButton;
let buttonJump = document.getElementById('jump');
buttonJump.onclick = reactToJumpButton;

/*******************************************************************************
Hook up anonymous EventHandler function for keyboard key presses
*******************************************************************************/
window.onkeydown = function(event) {
    switch(event.key) {
        case "ArrowDown":
        case "s":
            reactToMoveDownButton();
            break;
        case "ArrowUp":
        case "w":
            reactToMoveUpButton();
            break;
        case "ArrowRight":
        case "d":
            reactToMoveRightButton();
            break;
        case "ArrowLeft":
        case "a":
            reactToMoveLeftButton();
            break;
        case "S":
            reactToJumpDownButton();
            break;
        case "W":
            reactToJumpUpButton();
            break;
        case "D":
            reactToJumpRightButton();
            break;
        case "A":
            reactToJumpLeftButton();
            break;
        case " ":
            reactToAttackButton();
            break;
    }
}

const moveUpButton = document.getElementById('move-up-button');
const moveDownButton = document.getElementById('move-down-button');
const moveLeftButton = document.getElementById('move-left-button');
const moveRightButton = document.getElementById('move-right-button');
const jumpButton = document.getElementById('jump-button');
const attackButton = document.getElementById('attack-button');

moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
moveLeftButton.addEventListener('click', moveLeft);
moveRightButton.addEventListener('click', moveRight);
jumpButton.addEventListener('click', jumpUp);
attackButton.addEventListener('click', attackBlock);

document.addEventListener('keydown', (event) => {
  // Keypress handling already implemented in adventure-assignment.js
});