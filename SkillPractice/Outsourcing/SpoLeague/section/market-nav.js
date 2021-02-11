var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
switch (thisfilefullname){
    case 'market-item.html':
        a = 'orange-border';
        break;
    case 'market-avatar.html':
        b = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./market-item.html" class="${a}">아이템 마켓</a><div class="border"></div>
                <a href="./market-avatar.html" class="${b}">아바타 마켓</a>
            </div>
`
document.write(sport);