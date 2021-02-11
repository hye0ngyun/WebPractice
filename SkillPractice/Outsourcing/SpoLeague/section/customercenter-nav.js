var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
let c = '';
let d = '';
let e = '';
switch (thisfilefullname){
    case 'customercenter-notice.html':
        a = 'orange-border';
        break;
    case 'customercenter-sportevent.html':
        b = 'orange-border';
        break;
    case 'customercenter-holdemevent.html':
        c = 'orange-border';
        break;
    case 'customercenter-inquiry.html':
        d = 'orange-border';
        break;
    case 'customercenter-proposer.html':
        e = 'orange-border';
        break;
};

let sport = `
<div class="main-header">
                <a href="./customercenter-notice.html" class="${a}">공지사항</a><div class="border"></div>
                <a href="./customercenter-sportevent.html" class="${b}">스포츠이벤트</a><div class="border"></div>
                <a href="./customercenter-holdemevent.html" class="${c}">홀덤이벤트</a><div class="border"></div>
                <a href="./customercenter-inquiry.html" class="${d}">문의하기</a><div class="border"></div>
                <a href="./customercenter-proposer.html" class="${e}">추천인</a>
            </div>
`
document.write(sport);