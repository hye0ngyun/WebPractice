var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a1 = '';
let b1 = '';
let c1 = '';
switch (thisfilefullname){
    case 'customercenter-myinfo-1.html':
        a1 = 'bgc-grey';
        break;
    case 'customercenter-myinfo-2.html':
        b1 = 'bgc-grey';
        break;
    case 'customercenter-myinfo-3.html':
        c1 = 'bgc-grey';
        break;
};

let sport1 = `
<div class="grad-1 proposer-header">
                    <a href="customercenter-myinfo-1.html" class="proposer-header-item ${a1}">
                        <span>기본정보</span>
                    </a>
                    <a href="customercenter-myinfo-2.html" class="proposer-header-item ${b1}">
                        <span>이용제한설정</span>
                    </a>
                    <a href="customercenter-myinfo-3.html" class="proposer-header-item ${c1}">
                        <span>게임탈퇴</span>
                    </a>
                </div>
`
document.write(sport1);