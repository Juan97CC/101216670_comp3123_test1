
lowerCaseWords = (array) =>{

    result = array.filter(arr => typeof(arr) == 'string')
    result = result.map(arr => arr = arr.toLowerCase())
    
    return result
}

lowerPromise = (arr) =>{
     new Promise((resolve,reject) => {
        
         if(arr.length > 0)
             resolve( console.log(lowerCaseWords(arr)))
         
         else
            reject ("Error: array is empty")
     })}
     

const attempt1 = [2, "Raptor", true, "Country", 433]
const attempt2 = ["MOTHER", "HOLLYWOOD", false, , 5500, "happy"]
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerPromise(attempt1)
lowerPromise(attempt2)
lowerPromise(mixedArray)

