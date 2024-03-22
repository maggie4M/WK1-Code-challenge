function calculatePoints(number){
    const speedLimit = 70;
    const kmOverSpeedLimit = 5;

    if(speed <= speedLimit){
        console.log("Ok");
    }else {
         const earnedPoints = Math.floor((speed-speedLimit)/kmOverSpeedLimit)
        console.log(`Points:${earnedPoints}`)
        if (earnedPoints >12){
        console.log("Licence suspended");
      } else {
        console.log(`Points:${earnedPoints}`)
    }

    }
}
speed = 105
console.log(calculatePoints (105));
speed=250
console.log(calculatePoints())


