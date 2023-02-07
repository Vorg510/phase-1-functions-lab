// Code your solution in this file!

// function distanceFromHqInBlocks(currentLocation) {
//   return Math.abs(42 - currentLocation);
// }

// function distanceFromHqInFeet(location) {
//   return distanceFromHqInBlocks(location) * 264;
// }

// function distanceTravelledInFeet(pointA, pointB) {
//   return Math.abs(pointB - pointA) * 264;
// }

// function calculatesFarePrice(pointA, pointB) {
//   const distance = distanceTravelledInFeet(pointA, pointB);
//   if (distance < 400) {
//     return 0;
//   } else if (401 < distance && distance < 2000) {
//     return (distance - 400) * 0.02;
//   } else if (distance >= 2000 && distance <= 2500) {
//     return 25;
//   } else {
//     return "cannot travel that far";
//   }
// }


function distanceFromHqInBlocks(blockNumber){ 
  if (blockNumber > 42){
    return blockNumber - 42
  }
  else {
    return 42 - blockNumber
  }
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination){
  if (start < destination) {
    return (destination - start) * 264
  }
  else {
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)

  if (distance < 400){
    return 0
  }
  else if (distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02
  }
  else if (distance > 2000 && distance < 2500){
    return 25
  }
  else {
    return "cannot travel that far"
  }
}