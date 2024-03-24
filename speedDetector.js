function calculatePoints(speed){
    let speedLimit = 70;
    let demeritPoints = 0;
    //speed limit is to be 70
    //number of km for every 1 demerit point is 5

    // Use the if else statement to check the speed against the speed limit.
    // if the first condition is met , "Ok" is output if not the number of points over the speed limit are calculated using the km's 
    // if the points calculated are more than 12 , "License suspended is displayed"
    if(speed <= speedLimit){
        console.log("Ok");
    }else {
        demeritPoints = Math.floor((speed-speedLimit)/5)
        console.log(`Points:${demeritPoints}`)
        if (demeritPoints >12){
        return("License suspended");
        } else{
            return(`Points:${demeritPoints}`)
        }
    }
}