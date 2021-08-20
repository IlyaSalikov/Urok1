const fs = require('fs');
const path = require('path');

//создание папки
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) throw `Не удалось создать папку. ${err}`; // создать исключение(ошибку)
// });

// const filePath = path.join(__dirname, 'test', 'text.txt');
//  fs.writeFile(filePath, 'Hello NodeJS',{'flag': 'w'}, (err) => {
//      if(err) throw `Не удалось создать файл. ${err}`;
//      console.log('Файл создан');
//  });

// fs.appendFile(filePath, '\nHello again', err => {
//     if(err) throw `Не удалось добавить в файл. ${err}`;
//     console.log('Файл обновлен');
// });

// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if(err) throw `Не удалось прочитать файл. ${err}`;
//     console.log(content);
// });

//В файле fs.js сделать проверку на то, что если папка test уже существует, то не пытаться создать ее
const dir = '../test'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
//Создать два текстовых файла, занести в них разное текстовое содержимое.

 const firstFile = path.join(__dirname, 'test', 'File_1.txt');
  fs.writeFile(firstFile, ' мама мыла раму ',{'flag': 'w'}, (err) => {
      if(err) throw `Не удалось создать файл. ${err}`;
     console.log('Файл создан');
 });

 const secFile = path.join(__dirname, 'test', 'File_2.txt');
 fs.writeFile(secFile, ' рама мыла маму ',{'flag': 'w'}, (err) => {
     if(err) throw `Не удалось создать файл. ${err}`;
     console.log('Файл создан');
});

//Создать 3 файл, в который будет заноситься содержимое из первого и второго файла.
const thirdFile = path.join(__dirname, 'test', 'File_3.txt');
const forthFile = path.join(__dirname, 'test', 'File_4.txt');

// fs.readFile(firstFile, 'utf-8', (err, content) => {
//     if(err) throw `Не удалось прочитать файл. ${err}`;
//      fs.appendFile(thirdFile, content, (err) => {
//          if(err) throw `Не удалось создать файл. ${err}`;
//          console.log('Файл создан');
//      });
// });
//
// fs.readFile(secFile, 'utf-8', (err, content) => {
//     if(err) throw `Не удалось прочитать файл. ${err}`;
//     fs.appendFile(thirdFile, content, (err) => {
//         if(err) throw `Не удалось создать файл. ${err}`;
//         console.log('Файл создан');
//     });
// });

// //В 3 файле найти все совпадающие слова, удалить их и занести текст без дубликатов в файл 4.
fs.readFile(thirdFile, 'utf-8', (err, content) => {
    if (err) throw `Не удалось прочитать файл. ${err}`;
    let arr = content.split(' ');
    let arr_1 = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
    console.log(arr_1);

    let arr_2 = arr_1.toString();

    fs.readFile(thirdFile, 'utf-8', (err) => {
        if (err) throw `Не удалось прочитать файл. ${err}`;
        fs.appendFile(forthFile, arr_2, (err) => {
            if (err) throw `Не удалось создать файл. ${err}`;
            console.log('Файл создан');
        });
    });
});

//Удалить файлы 1, 2 и 3.
fs.unlink('demo/test/File_1.txt', (err) => {
    if (err) throw err;
    console.log('Deleted');
});
fs.unlink('demo/test/File_2.txt', (err) => {
    if (err) throw err;
    console.log('Deleted');
});
fs.unlink('demo/test/File_3.txt', (err) => {
    if (err) throw err;
    console.log('Deleted');
});
