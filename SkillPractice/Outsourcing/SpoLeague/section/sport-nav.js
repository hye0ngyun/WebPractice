var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let sportgame_active = '';
let livegame_active = '';
let gamelog_active = '';
let gameresult_active = '';
switch (thisfilefullname){
    case 'sport-sportgame.html':
        sportgame_active = 'orange-border';
        break;
    case 'sport-livegame.html':
        livegame_active = 'orange-border';
        break;
    case 'sport-gamelog.html':
        gamelog_active = 'orange-border';
        break;
    case 'sport-gameresult.html':
        gameresult_active = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./sport-sportgame.html" class="${sportgame_active}">스포츠게임</a><div class="border"></div>
                <a href="./sport-livegame.html" class="${livegame_active}">라이브게임</a><div class="border"></div>
                <a href="./sport-gamelog.html" class="${gamelog_active}">게임내역</a><div class="border"></div>
                <a href="./sport-gameresult.html" class="${gameresult_active}">게임결과</a>
            </div>
`
document.write(sport);