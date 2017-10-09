var DIRECTIONS = ['N', 'E', 'S', 'W'];
var GRID_ARRAY = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9]
];

var GRID_SIZE = 10;
var START_POINT = GRID_ARRAY[0][0];

var rover = {
  position: START_POINT,
  direction: DIRECTIONS[0]
};

var obstacle = {
  position: [3,8]
};

function movement(move) {
  var xIncrease = 0, yIncrease = 0;
  switch(rover.direction) {
    case 'N':
      yIncrease++;
      break;
    case 'E':
      xIncrease++;
      break;
    case 'S':
      yIncrease--;
      break;
    case 'W':
      xIncrease--;
      break;
  }

  if (move === 'b') {
      xIncrease *= -1;
      yIncrease *= -1;
  }

  rover.position[0] = (rover.position[0] + xIncrease + GRID_SIZE) % GRID_SIZE;
  rover.position[1] = (rover.position[1] + yIncrease + GRID_SIZE) % GRID_SIZE;

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function changeDirection(spin) {
  if (spin === 'l') {
    rover.direction = (rover.direction - 1 + 4) % 4;
  } else {
    rover.direction = (rover.direction + 1) % 4;
  }
}

function inputMovement(arrayOrder) {
  for(i = 0; i > arrayOrder.length; i++) {
    if (arrayOrder[i] === 'b' || arrayOrder[i] === 'f') {
      movement(arrayOrder[i], rover);
    } else if (arrayOrder[i] === 'l' || arrayOrder[i] === 'r') {
      changeDirection(arrayOrder[i], rover);
    } else {
      console.log("Sorry I can't interpretate this order: " + arrayOrder[i]);
    }
  }
}
var userInput = prompt("Where you gonna go?: ");
inputMovement(userInput);
