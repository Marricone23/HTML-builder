let fs = require('fs');
const path = require('path');
const dirPath = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\05-merge-styles\\styles\\';
const dirPathNew = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\05-merge-styles\\project-dist\\';

fs.readdir( dirPath, (err, files) => {
   files.forEach((item)=>{
      let itemPath = path.join(item);
      console.log(itemPath)
      const extname = path.extname(item)
      console.log(extname)
      fs.stat(dirPath, (error, stats) => {   
        if (error) {
          console.log(error);
        }
        else {
          console.log(stats);
          console.log("Path is file:", stats.isFile());
          console.log("Path is directory:", stats.isDirectory());
        }   
});
    
   })
   if(err) throw err; // не прочитать содержимое папки
   console.log('В папке находятся файлы:' + files);

});


var array1 = fs.readFileSync(dirPath + 'style-1.css', 'utf8').toString().split();
console.log(array1);
var array2 = fs.readFileSync(dirPath + 'style-2.css','utf8').toString().split();
console.log(array2);
var array3 = fs.readFileSync(dirPath + 'style-3.css', 'utf8').toString().split();
console.log(array3);

/* function Newarr () {
    fs.readFile(dirPath, err, files =>{
        files.forEach((element)=>{
            var array = element.toString().split();
            for(i in array) {
                console.log(array[i]);
            }
            if(err) throw err;
            console.log("ehhhhfff")
        })
        
    })
}

Newarr ()*/
/*
fs.readFile(dirPath + 'style-1.css', function(err, data) {
    if(err) throw err;
    var array1 = data.toString().split();
    for(i in array1) {
        console.log(array1[i]);
    }
});
fs.readFile(dirPath + 'style-2.css', function(err, data) {
    if(err) throw err;
    var array2 = data.toString().split();
    for(i in array2) {
        console.log(array2[i]);
    }
});
fs.readFile(dirPath + 'style-3.css', function(err, data) {
    if(err) throw err;
    var array3 = data.toString().split();
    for(i in array3) {
        console.log(array3[i]);
    }
});
*/


var newArray = array1 + array2 + array3; 


fs.writeFile(dirPathNew + "bundle.css", newArray , function(error){
    if(error) {
        return
    }; 
});