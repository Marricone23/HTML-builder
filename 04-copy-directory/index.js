let fs = require('fs');
const path = require('path');
const dirPath = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\04-copy-directory\\files\\';


fs.mkdir('04-copy-directory/files-copy', { recursive: true }, (err) => {
   if (err) throw err;// папка уже существует
   console.log('папка была создана')
});

fs.readdir( dirPath, (err, files) => {
   files.forEach((item)=>{
      let itemPath = path.join(item);
      console.log(itemPath)
   })
   if(err) throw err; // не прочитать содержимое папки
   console.log('В папке находятся файлы:' + files);

});

//let { COPYFILE_EXCL } = fs.constants;
fs.copyFile(dirPath + 'test-css.css', '04-copy-directory/files-copy/test-css-copy.css',err => {
   if(err) throw err; // не удалось скопировать файл
   console.log('Файл успешно скопирован');
});
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
});

