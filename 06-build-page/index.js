let fs = require('fs');
const path = require('path');
const dirPathAssets = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\assets\\';
const dirPathComponents = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\components\\';
const dirPathStyles = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\styles\\';
const dirPathNew = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\project-dist\\';
const to = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\project-dist\\assets\\img';
const dirPathAssetsImg = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\assets\\img';
const dirPathAssetsSvg = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\assets\\svg';
const toDirPathAssetsSvg = 'C:\\Users\\a.asouski\\Desktop\\HTML-builder-1\\06-build-page\\project-dist\\assets\\svg';

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
 });


/*function copyFolderSync(dirPathAssetsImg, to ) {
    fs.readdirSync(dirPathAssetsImg).forEach(element => {
        if (fs.lstatSync(path.join(dirPathAssetsImg, element)).isFile()) {
            fs.copyFileSync(path.join(dirPathAssetsImg, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(dirPathAssetsImg, element), path.join(to, element));
        }
    });
}
copyFolderSync(dirPathAssetsImg, to);*/

function copyFolderSync(dirPathAssetsImg, to ) {
    fs.readdir(dirPathAssetsImg,( err,files ) => 
    files.forEach(element => {
        if (fs.lstatSync(path.join(dirPathAssetsImg, element)).isFile()){         
            fs.copyFile(path.join(dirPathAssetsImg, element), path.join(to, element), err => {
                if(err) throw err; // не удалось скопировать файл
                console.log('Файл успешно скопирован');
            });
        } else {
            copyFolder(path.join(dirPathAssetsImg, element), path.join(to, element), err => {
                if(err) throw err; // не удалось скопировать файл
                console.log('Файл успешно скопирован');
            });
        }
    })
   
);  
}
copyFolderSync(dirPathAssetsImg, to);

/*function copyFolderSvg(dirPathAssetsSvg, toDirPathAssetsSvg ) {
    fs.readdirSync(dirPathAssetsSvg).forEach(element => {
        if (fs.lstatSync(path.join(dirPathAssetsSvg, element)).isFile()) {
            fs.copyFileSync(path.join(dirPathAssetsSvg, element), path.join(toDirPathAssetsSvg, element));
        } else {
            copyFolderSync(path.join(dirPathAssetsSvg, element), path.join(toDirPathAssetsSvg, element));
        }
    });
}
copyFolderSvg(dirPathAssetsSvg, toDirPathAssetsSvg);*/


function copyFolderSvg(dirPathAssetsSvg, toDirPathAssetsSvg ) {
    fs.readdir(dirPathAssetsSvg,( err,files ) => 
    files.forEach(element => {
        if (fs.lstatSync(path.join(dirPathAssetsSvg, element)).isFile()) {
            fs.copyFile(path.join(dirPathAssetsSvg, element), path.join(toDirPathAssetsSvg, element), err => {
                if(err) throw err; // не удалось скопировать файл
                console.log('Файл успешно скопирован');
            });
        } else {
            copyFolder(path.join(dirPathAssetsSvg, element), path.join(toDirPathAssetsSvg, element), err => {
                if(err) throw err; // не удалось скопировать файл
                console.log('Файл успешно скопирован');
            });
        }
    })
   
);  
}
copyFolderSvg(dirPathAssetsSvg, toDirPathAssetsSvg);

 
