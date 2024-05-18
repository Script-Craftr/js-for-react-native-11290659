let numbers = [];

const processArray = (numbers) => {
    const modifiedNums = numbers.map((number) => {
        if(number % 2 === 0){
            return Math.pow(number,2);   //squares the number
        }
        else {
            return number * 3;           //triples the number(times 3)
        }
    })

    console.log(modifiedNums);
}

processArray([2,4,5,6,7,9]);

const formatArrayStrings = (stringArr,modifiedNums) => {
    const modifiedStringArr = stringArr.map((string,index) => {
        if(modifiedNums[index] % 2 === 0){
            return string.toUpperCase();
        }
        else{
            return string.toLowerCase();
        }
    })
    console.log(modifiedStringArr);
}

formatArrayStrings(["hello", "kitty", "world", "port"], [2, 3, 5, 7]);







const modifiedNums = numbers.map((number) => {
    if(number % 2 === 0){
        return number * number;
    }
    else{
        return Math.pow(number,3)
    }
})

//console.log(modifiedNums);


