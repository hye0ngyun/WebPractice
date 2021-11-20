{
  const http = require('http'); // Hyper Text Transfer Protocol
  const fs = require('fs'); // File System
  http.createServer(function (req, res) {
    // fs.readFile('읽을 파일', function(err, data))
    fs.readFile('demofile1.html', function(err, data) { // 파일시스템을 이용해서 demofile1.html의 정보(data)를 가져온다.
      res.writeHead(200, {'Content-Type': 'text/html'}); // http header
      res.write(data); // http body
      return res.end();
    });
  }).listen(8080); // localhost:8080 으로 로컬 서버를 연다.

  // create a file named mynewfile1.txt:
  // fs.appendFile()은 파일이 존재하지 않으면 파일을 생성하고 내용을 저장한다.
  // 파일이 존재한다면 내용을 덧붙인다.
  fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  // fs.open()은 파일이 존재하지 않으면 파일을 생성한다. 존재한다면 변하는 것은 없다.
  // 빈 파일을 생성한다.
  fs.open('mynewfile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
  });

  // fs.writeFile()은 파일이 존재하지 않으면 파일을 생성한다.
  // 파일이 존재한다면 새로운 내용으로 덮어쓴다.
  fs.writeFile('mynewfile3.txt', 'Hello New content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
  });

  // fs.unlink()는 파일이 존재하면 파일을 삭제한다.
  // 파일이 존재하지 않는다면 에러를 발생시킨다.
  // [Error: ENOENT: no such file or directory, unlink '.\mynewfile2.txt']
  // fs.unlink('mynewfile2.txt', function(err) {
  //   if (err) throw err;
  //   console.log('File deleted!');
  // })


  // fs.rename()은 기존 파일의 이름을 새로운 이름으로 변경한다.
  // 기존 파일이 존재하지 않으면 에러를 발생시킨다.
  // [Error: ENOENT: no such file or directory, rename '.\mynewfile1.txt' -> '.\myrenamedfile.txt']
  fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  })

}