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
fs.mkdir('06-build-page/project-dist/assets/fonts', { recursive: true }, (err) => {
    if (err) throw err;// папка уже существует
    console.log('папка была создана')
 });
fs.mkdir('06-build-page/project-dist/assets/img', { recursive: true }, (err) => {
    if (err) throw err;// папка уже существует
    console.log('папка была создана')
 });
fs.mkdir('06-build-page/project-dist/assets/svg', { recursive: true }, (err) => {
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


fs.copyFile(dirPathAssets +'/fonts/' + 'Karolina-Regular.woff2', '06-build-page/project-dist/assets/fonts/Karolina-Regular.woff2',err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
 });/*
 fs.copyFile(dirPath + 'test-image.jpg', '04-copy-directory/files-copy/test-image-copy.jpg',err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
 });
 fs.copyFile(dirPath + 'test-js.js', '04-copy-directory/files-copy/test-js-copy.js',err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
 });
 fs.copyFile(dirPath + 'test-text.txt', '04-copy-directory/files-copy/test-text-copy.txt',err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
 });*/
 
