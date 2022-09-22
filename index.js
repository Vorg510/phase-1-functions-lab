// Code your solution in this file!

function distanceFromHqInBlocks(currentLocation) {
  return Math.abs(42 - currentLocation);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
  return Math.abs(pointB - pointA) * 264;
}

function calculatesFarePrice(pointA, pointB) {
    const distance = distanceTravelledInFeet(pointA, pointB)
    if ( distance <400) {
        return 0
    }
    else if (401<distance && distance<2000){
        return (distance-400) *0.02
    } 
    else if (distance >= 2000 && distance <= 2500){
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
}
