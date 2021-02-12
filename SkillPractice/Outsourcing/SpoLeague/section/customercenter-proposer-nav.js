var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a1 = '';
let b1 = '';
let c1 = '';
let d1 = '';
switch (thisfilefullname){
    case 'customercenter-proposer-1.html':
        a1 = 'bgc-grey';
        break;
    case 'customercenter-proposer-2.html':
        b1 = 'bgc-grey';
        break;
    case 'customercenter-proposer-3.html':
        c1 = 'bgc-grey';
        break;
    case 'customercenter-proposer-4.html':
        d1 = 'bgc-grey';
        break;
};

let sport1 = `
<div class="grad-1 proposer-header">
                    <a href="customercenter-proposer-1.html" class="proposer-header-item ${a1}">
                        <span>친구활동현황</span>
                    </a>
                    <a href="customercenter-proposer-2.html" class="proposer-header-item ${b1}">
                        <span>친구지수현황</span>
                    </a>
                    <a href="customercenter-proposer-3.html" class="proposer-header-item ${c1}">
                        <span>행운포인트</span>
                    </a>
                    <a href="customercenter-proposer-4.html" class="proposer-header-item ${d1}">
                        <span>금고</span>
                    </a>
                </div>
`
document.write(sport1);