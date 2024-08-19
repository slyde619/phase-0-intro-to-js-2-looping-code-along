// Code your solutions in this file
function writeCards(array, eventName){
    // Empty array to hold messages
    const messageArray = []

    // Iterate through input array and build out the thank you message for each name
    for(let index = 0; index < array.length; index++){
        let thankYouMessage = `Thank you, ${array[index]}, for the wonderful ${eventName} gift!`
        messageArray.push(thankYouMessage)
    }

    // return new array with given arguments
    return messageArray
}

//console.log(writeCards(['Emma', "Lincoln","Kingsley"], "birthday"))
//console.log(writeCards(['Obia', "klaus","Moses", "Minister"], "Marriage"))

function countDown(num){
    let index = 0
    while(index <= num){
        console.log(num)
        num--
    }
}

countDown(10)