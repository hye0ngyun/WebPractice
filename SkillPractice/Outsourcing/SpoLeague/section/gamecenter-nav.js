var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
let gamelog_active = '';
let gameresult_active = '';
switch (thisfilefullname){
    case 'gamecenter-holdem.html':
        a = 'orange-border';
        break;
    case 'gamecenter-howto.html':
        b = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./gamecenter-holdem.html" class="${a}">홀덤게임</a><div class="border"></div>
                <a href="./gamecenter-howto.html" class="${b}">게임방법</a>
            </div>
`
document.write(sport);