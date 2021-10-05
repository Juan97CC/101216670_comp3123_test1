


let resolvedPromise = 
  
     new Promise((resolve, reject) => {
         
        setTimeout(() =>{
            if(0 == 0)
                resolve({'message':' delayed success'});
            else
                reject("Error")

        },500)})    


resolvedPromise.then(function(success){ console.log(success)},
function(error){ console.log(error())})



const rejectedPromise= () => {
    return  new Promise(function(resolve, reject){
      setTimeout(() => {
        if(0 ==1)
            resolve('resolved promise')  
        else
            reject('error: delayed expection')
        
      },500)})}
  

      async function rej() {
          try{
              let result = await rejectedPromise()
          }
          catch(e){
              console.log(e)
          }
        
      }
   
      rej()
   
   
   
    //rejectedPromise().then(s => console.log("Success : " + s))
     //.catch(e => console.log("" + e))
       
     
   



   
