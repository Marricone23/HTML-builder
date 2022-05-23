
/*const fs = require('fs/promises');
const path = require('path');

//console.log(path.dirname(__filename));

const dir = path.dirname(__filename);

fs.readdir(dir);*/

const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\03-files-in-folder\\secret-folder\\';

const filess = fs.readdirSync(dirPath).map(fileName => `${dirPath}\\${fileName}`);
console.log(filess.join('\n'));

const files = fs.readdirSync(dirPath, {withFileTypes: true})
.filter(item => !item.isDirectory())
.map(item => item.name)

console.log(files.join('\n'));

/*fs.readdir( dirPath, {withFileTypes: true}, (err, files) => {
  files.forEach((item)=>{
     let itemPath = path.join(item);
     console.log(itemPath)
  })
  if(err) throw err; // не прочитать содержимое папки
  console.log('В папке находятся файлы:' + files);

});*/

/*const stat = fs.statSync(dirPath);
console.log(stat.isDirectory());
console.log("Path is file:", stat.isFile());*/

files.forEach(file => {fs.stat(dirPath, (error, stats) => {
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