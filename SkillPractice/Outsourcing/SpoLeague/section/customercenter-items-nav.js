var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
let a1 = '';
let b1 = '';
switch (thisfilefullname){
    case 'customercenter-items-1.html':
        a1 = 'bgc-grey';
        break;
    case 'customercenter-items-2.html':
        b1 = 'bgc-grey';
        break;
};

let sport1 = `
<div class="grad-1 proposer-header">
                    <a href="customercenter-items-1.html" class="proposer-header-item ${a1}">
                        <span>보유아이템</span>
                    </a>
                    <a href="customercenter-items-2.html" class="proposer-header-item ${b1}">
                        <span>보유아바타</span>
                    </a>
                </div>
`
document.write(sport1);