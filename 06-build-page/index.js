let fs = require('fs');
const path = require('path');
const dirPathAssets = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\assets\\';
const dirPathComponents = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\components\\';
const dirPathStyles = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\styles\\';
const dirPathNew = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\project-dist\\';

fs.mkdir('06-build-page/project-dist', { recursive: true }, (err) => {
   if (err) throw err;// папка уже существует
   console.log('папка была создана')
});

fs.mkdir('06-build-page/project-dist/assets', { recursive: true }, (err) => {
    if (err) throw err;// папка уже существует
    console.log('папка была создана')
 });

fs.writeFile(dirPathNew + "style.css", "",function(error){
    if(error) {
        return
    }; 
});

fs.writeFile(dirPathNew + "index.html", "", function(error){
    if(error) {
        return
    }; 
});

