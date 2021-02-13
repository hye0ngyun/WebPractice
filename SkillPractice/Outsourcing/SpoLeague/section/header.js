let header = `
<nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="top-header">
            <a href="../index.html">
                <img src="../src/pc-header-logo.png" alt="" height="100%" width="100%">
            </a>
            <div class="login-cont">
                <div class="search-signup">
                    <a href="">ID / PW찾기</a>
                    <div class="border"></div>
                    <a href="../pages/sign-up.html" class="orange">회원가입</a>
                </div>
                <div class="login-form">
                    <form action="" method="POST">
                        <input type="text" class="login-id" placeholder="ID">
                        <input type="text" class="login-pw" placeholder="PW">
                        <input type="submit" class="login-btn" value="로그인">
                    </form>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="../index.html"><img src="../src/mobile-logo.png"></a>
                <a href="../pages/customercenter-myinfo-1.html" class="user"><i class="fas fa-user"></i></a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="../pages/sport-sportgame.html">스포츠</a></li>
                    <li><a href="../pages/gamecenter-holdem.html">게임센터</a></li>
                    <li><a href="../pages/useguide-basicguide.html">이용안내</a></li>
                    <li><a href="../pages/community-humor.html">커뮤니티</a></li>
                    <li><a href="../pages/market-item.html">마켓</a></li>
                    <li><a href="../pages/customercenter-notice.html">고객센터</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
`;
document.write(header);