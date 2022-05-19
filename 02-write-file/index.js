const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;

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
    },
        
));


process.on('SIGINT', () => stdout.write('Удачи в изучении Node.js!'));
process.on('SIGINT', () => process.exit());
//process.exit()//process.exit();    





