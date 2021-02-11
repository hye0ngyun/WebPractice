var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
let c = '';
let d = '';
switch (thisfilefullname){
    case 'community-humor.html':
        a = 'orange-border';
        break;
    case 'community-betting.html':
        b = 'orange-border';
        break;
    case 'community-analysis.html':
        c = 'orange-border';
        break;
    case 'community-holdem.html':
        d = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./community-humor.html" class="${a}">유머게시판</a><div class="border"></div>
                <a href="./community-betting.html" class="${b}">배팅게시판</a><div class="border"></div>
                <a href="./community-analysis.html" class="${c}">분석게시판</a><div class="border"></div>
                <a href="./community-holdem.html" class="${d}">홀덤게시판</a>
            </div>
`
document.write(sport);