var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
let c = '';
switch (thisfilefullname){
    case 'useguide-basicguide.html':
        a = 'orange-border';
        break;
    case 'useguide-sportguide.html':
        b = 'orange-border';
        break;
    case 'useguide-interface.html':
        c = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./useguide-basicguide.html" class="${a}">기초가이드</a><div class="border"></div>
                <a href="./useguide-sportguide.html" class="${b}">스포츠가이드</a><div class="border"></div>
                <a href="./useguide-interface.html" class="${c}">인터페이스</a>
            </div>
`
document.write(sport);