//filesystem module in nodejs

const fs = require('fs');

// file write (synchronous)

//in sync we have 3 argument - filename, data and 3rd is optional where encoding utf8 is default
fs.writeFileSync('myfile.txt','wow i did not know you could read');
console.log("writing in file is done succesfully");

//file write (asynchronous)
// similar to sync it takes filename, data, optional and + callback
fs.writeFile('myfile.txt','heyoooo', function(err){
    if(err){
        console.log("error occured",err);
    }else{
        console.log("file created successfully");
    }
});

console.log("after file write");

//file read sync- just path
let data = fs.readFileSync('myfile.txt');
console.log('Data of file is:',data.toString());

//async read- path and callbacl

fs.readFile('myfile.txt',function(err,data){
    if(err){
        console.log("error"); return;
    }else{console.log("run succ data is",data.toString);}
})

console.log("after file read");

// delete file sync- path
fs.unlinkSync('myfile.txt')

// if file is not available we use try catch method
try{
    fs.unlinkSync('myfile1.txt');
}catch(error){
    console.log("error occured",error)
}

//delete file async- path we want to delete and callback has error if any 
fs.unlink('myfile',function(err){
    if(err){
        console.log("error aagya",err);
        return;
    }console.log("file deleted successfully")
})

//create directory, sync - path
try {
    fs.mkdirSync('mydirectory'); // we can also use fs.existssync to check if it exist or not
} catch (error) {
    console.log("error occ")
    
}
console.log("after mkdirSync");

//create dir, async
fs.mkdir('mydir',function(err){
    if(err){
    console.log("error occ",err);
    return
}
console.log("directory created")}
)

// delete directory sync
fs.rmdirSync('mydir');
console.log("afterrmdir");

// delete directory async
fs.rmdir('mydir',function(err){
    if(err){
        console.log("error")
        return
    }console.log("deleted")
})

//read directory async
console.log("current dir:",__dirname);
fs.readdir(__dirname,function(err,data){
    if(err){
        console.log("error occured",err);
        return;
    }console.log("content of dir is",data)
}) //__dirname tells the directory of current existing file

//read dir-sync
let data1=[]
if(fs.existsSync('mydir1')){
    data1= fs.readdirSync('mydir1')}
    else{
    console.log("doesn't exist");}
console.log("data is",data1)

