function Book(author, pages, price, title){
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.title = title;
};

var html = new Book('ko', '500', '15,500', '웹 표준의 정석');
var youtube = new Book('shin', '230', '12,300', '유튜브 사용법');
var python = new Book('park', '320', '18,800', '점프 투 파이썬');

var bookList = [html, youtube, python];

document.write('<h1>책 제목으로 살펴보기</h1>');
document.write(`<div>`);
for(var i = 0; i < bookList.length; i++){
    document.write(`<p style="border: 1px solid black; padding: 1em;">${bookList[i].title}</p>`);
}
document.write(`</div>`);