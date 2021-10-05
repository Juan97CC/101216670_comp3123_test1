const { log } = require('console');
var fs = require('fs')
var path  =require('path');
p = './newLogsdirectory'





// create dir

createDir = () => {
    
        fs.mkdir(p, (err) => {
            if(err) {
                throw err;
            }
            console.log(`Directory has been made`)
        
        
        }
        
        )

        

    

}





//Removing Dir

delDir = () => {
    try{
        fs.rmdirSync(p, {recursive: true})

        console.log(`Directory has been deleted`)
    }
    catch(err){
        console.error('Error')
    }

}






//Inside Dir


// getting file in dir
getLogs = () =>{
    
    const log = fs.readdirSync('./newLogsdirectory')
    console.log("Files: \n")

    for (const logs in log) {
        console.log("Files inside newLogsdirectory "+ log[logs])
            
        }
    }





//creating files in dir
createFile = (fileName) => {
  
fs.writeFile(p+'/'+fileName+'.txt', 'Write inside', function(err){
    if(err) throw err;
    console.log('created file ' + fileName+ '.txt')
})}


// deleting file
deleteFile = (fileName) => {
    setTimeout (() =>{

    fs.unlink(p+'/'+fileName+'.txt', function(e){
        if(e) throw e;
        console.log('deleted file..' + fileName+'.txt')}
    )},10000
    )
 }



 //Runs smooth

createDir()

console.log("Creating 10 logs.txt")

createFile('log1')
createFile('log2')
createFile('log3')
createFile('log4')
createFile('log5')
createFile('log6')
createFile('log7')
createFile('log8')
createFile('log9')
createFile('log10')


setTimeout(() =>{
    getLogs()
},5000)









deleteFile('log1')
deleteFile('log2')
deleteFile('log3')
deleteFile('log4')
deleteFile('log5')
deleteFile('log6')
deleteFile('log7')
deleteFile('log8')
deleteFile('log9')
deleteFile('log10')


setTimeout(() =>{
    getLogs()
},12000)





setTimeout(() => {
    delDir('/newLogsdirectory')
},15000)
