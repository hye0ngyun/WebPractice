var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a = '';
let b = '';
let c = '';
let d = '';
let e = '';
let f = '';
let g = '';
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
    case 'customercenter-proposer-1.html':
        e = 'orange-border';
        break;
    
    case 'customercenter-proposer-2.html':
        e = 'orange-border';
        break;
        
    case 'customercenter-proposer-3.html':
        e = 'orange-border';
        break;
        
    case 'customercenter-proposer-4.html':
        e = 'orange-border';
        break;
    case 'customercenter-myinfo-1.html':
        f = 'orange-border';
        break;
    case 'customercenter-myinfo-2.html':
        f = 'orange-border';
        break;
    case 'customercenter-myinfo-3.html':
        f = 'orange-border';
        break;
    case 'customercenter-items-1.html':
        g = 'orange-border';
        break;
    case 'customercenter-items-2.html':
        g = 'orange-border';
        break;

};

let sport = `
<div class="main-header">
                <a href="./customercenter-notice.html" class="${a}">공지사항</a><div class="border"></div>
                <a href="./customercenter-sportevent.html" class="${b}">스포츠이벤트</a><div class="border"></div>
                <a href="./customercenter-holdemevent.html" class="${c}">홀덤이벤트</a><div class="border"></div>
                <a href="./customercenter-inquiry.html" class="${d}">문의하기</a><div class="border"></div>
                <a href="./customercenter-proposer-1.html" class="${e}">추천인</a><div class="border"></div>
                <a href="./customercenter-myinfo-1.html" class="${f}">내정보</a><div class="border"></div>
                <a href="./customercenter-items-1.html" class="${g}">아이템/아바타</a>
            </div>
`
document.write(sport);