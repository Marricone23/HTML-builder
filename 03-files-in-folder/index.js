const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\03-files-in-folder\\secret-folder\\';


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