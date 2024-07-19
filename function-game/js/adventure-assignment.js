/*
    ASSIGNMENT PROMPT ***************************************************

    Below are several empty function bodies; any code put inside of them
    will run when their corresponding buttons/keys are clicked or pressed.

    You have access to the following functions (aka actions) to execute:
        moveLeft, moveRight, moveUp, moveDown,
        jumpLeft, jumpRight, jumpUp, jumpDown,
        attack, jump, nudge

    (NOTE: One action from that list is unnecessary; it's up to you to 
    figure out which ones you need, but the names should be a big hint!)

    To execute a function, type its name (case matters!!!), followed by 
    parentheses and a semicolon, like this: 

        moveRight();

    Try executing different functions in the empty function bodies below; 
    if you execute the correct functions in the correct button reaction, 
    the game should become playable, and your player character can move 
    around, jump and attack!

    Your goal is to get every button to have the correct action occur
    when you click on them.


    CHALLENGE ************************************************************

    For certain movement related functions, if you put a number in between
    the parentheses, you can change the number of spaces the character moves! 
    
    However, the character can't move through (or land on) a boulder or hole; 
    they'll need to attack a boulder to destroy it and be able to move 
    through it, and the only way to get past holes is to jump over them.
*/

function reactToMoveRightButton() {
    // Here's a freebie answer, as an example.
    // The code below will cause the 'moveRight' function to run when you 
    // push the MOVE RIGHT button, causing the character to move to the right
    // (assuming no boulder is in the way)

    moveRight();
}

function reactToMoveLeftButton() {

}

function reactToMoveDownButton() {

}

function reactToMoveUpButton() {

}

function reactToAttackButton() {

}

function reactToJumpRightButton() {

}

function reactToJumpLeftButton() {

}

function reactToJumpDownButton() {

}

function reactToJumpUpButton() {

}

function reactToJumpButton() {

}

const MOVE_DISTANCE = 1; // Change this value to adjust movement speed

function moveUp() {
  jump(MOVE_DISTANCE);
}

function moveDown() {
  // Jumping down isn't typical in grid-based games, so we'll ignore this for now
  // You can implement falling mechanics here if desired. 
}

function moveLeft() {
  moveRight(-MOVE_DISTANCE); // Negative distance to move left
}

function moveRight() {
  moveLeft(MOVE_DISTANCE); // Positive distance to move right
}

function jumpUp() {
  jump(2 * MOVE_DISTANCE); // Increase distance for higher jump
}

function jumpDown() {
  // Ignored for now (see moveDown comment)
}

function attackBlock() {
  const block = getBlock(player.x, player.y);
  if (block && isAttackable(block)) {
    attack(block);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  switch (key) {
    case 'W':
      moveUp();
      break;
    case 'A':
      moveLeft();
      break;
    case 'S':
      moveDown();
      break;
    case 'D':
      moveRight();
      break;
    case 'Z':
      jumpUp();
      break;
    case 'X':
      jumpDown(); // Ignored for now
      break;
    case 'F':
      attackBlock();
      break;
  }
});