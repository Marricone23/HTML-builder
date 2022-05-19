const fs = require('fs');
const path = require('path');

/*const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));*/

const { stdin } = process;

fs.writeFile(
    path.join(__dirname,'newtext.txt'),
    '',   
    (err) => {
        if (err) throw err;
        console.log('Файл был создан');
    }    
);

stdin.on('data', data => fs.appendFile(
    path.join(__dirname, 'newtext.txt'), 
    data,   
    (err) => {
        if (err) throw err;
        console.log('Файл был создан'); 
          
    },
    (data) => {
        if( data == 'exit'){
            console.log('Пока!Пока!');
            process.exit();        
        }
       
    }

));


/*function exit(){
    if( data == 'exit'){
        console.log('Пока!Пока!');
        process.exit();        
    }
  
}*/




    





