let numbers = [];

//console.log(numbers);

const processArray = (numbers) => {
    const modifiedNums = numbers.map((number) => {
        if(number % 2 === 0){
            return Math.pow(number,2);
        }
        else {
            return number * 3;
        }
    })

    console.log(modifiedNums);
}

processArray([2,4,5]);









const modifiedNums = numbers.map((number) => {
    if(number % 2 === 0){
        return number * number;
    }
    else{
        return Math.pow(number,3)
    }
})

//console.log(modifiedNums);


