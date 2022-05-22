let fs = require('fs');
const path = require('path');
const dirPath = 'C:\\Users\\marri\\Desktop\\HTML-builder\\04-copy-directory\\files\\';

fs.mkdir('04-copy-directory/files-copy', err => {
   if(err) throw err; // не удалось создать папку
   console.log('Папка успешно создана');
});

fs.readdir(dirPath, (err, files) => {
   if(err) throw err; // не прочитать содержимое папки
   console.log('В папке находятся файлы:' + files);
});


//let { COPYFILE_EXCL } = fs.constants;
fs.copyFile('files', 'files-copy', err => {
   if(err) throw err; // не удалось скопировать файл. Он уже существует?
   console.log('Файл успешно скопирован');
});
