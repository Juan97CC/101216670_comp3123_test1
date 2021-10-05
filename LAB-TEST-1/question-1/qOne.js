
lowerCaseWords = (array ) =>{
     let newArr= [];
    for (i = 0; i < array.length; i++){
        if (typeof(array[i]) == "string") {
            newArr.push(array[i].toLowerCase())
        }  
    }
    return newArr;
}

const attempt1 = [2, "Raptor", true, "Country", 433]
const attempt2 = ["MOTHER", "HOLLYWOOD", false, , 5500, "happy"]
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

console.log(lowerCaseWords(attempt1))
console.log(lowerCaseWords(attempt2))
console.log(lowerCaseWords(mixedArray))
