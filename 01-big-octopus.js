function quadraticBiggestFish(fishes) {
  // Code goes here ...
  let maxLength = 0
  let maxFish = fishes[0]
  for (let i = 1; i < fishes.length; i++) {
    for (let j = 0; j < fishes.length; j++) {
      console.log('ahhhhh');
    }
    if (fishes[i].length > maxLength) {
      maxLength=fishes[i].length;
      maxFish = fishes[i]
    }

  }
  return maxFish
}


function nlognBiggestFish(fishes) {
  // Code goes here ...
  const sortedFishes = fishes.sort((a,b) => {
    return a.length - b.length;
  })

  return sortedFishes[sortedFishes.lenght - 1]
}


function linearBiggestFish(fishes) {
  let maxLength = fishes[0].length;
  let maxFish = fishes[0];

  for (let i = 1; i < fishes.length; i++) {
    if (maxLength < fishes[i].length) {
      maxLength = fishes[i].length;
      maxFish = fishes[i];
    }
  }
  return maxFish;
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (direction === tilesArray[i]) {
      return i;
    }
  }
}


const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}
