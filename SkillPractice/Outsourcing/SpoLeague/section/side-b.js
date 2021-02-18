let side_b = `
<div class="side-b">
<div class="side-b-user-info-wrap">
    <div class="side-b-banner">
        <span class="orange">GAME SLIP</span>
        <div class="switch-wrap">
            <span>이동</span>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
    <div class="side-b-btn-wrap">
        <button>전체삭제</button>
        <button>MAX 최대참여</button>
    </div>
    <div class="side-b-info-wrap">
        <div class="side-b-info-item">
            <span>아이템 사용</span>
            <button>적용하기</button>
        </div>
        <div class="side-b-info-item" style="background: rgb(44, 44, 44); display:block; font-size:0.9em;">
            <div>
                <input type="checkbox" class="side-b-cbox">
                <label style="
                font-weight: normal;
            ">아이템 사용 안함</label>
            </div>
            <div>
                <input type="checkbox">
                <label style="
                font-weight: normal;
            ">
                    <span class="orange">+1.01배당 추가</span>
                    <span>&nbsp;아이템 사용하기</span>
                </label>
            </div>
        </div>
        <div class="side-b-info-item">
            <span>보유루비</span>
            <span class="orange">0 루비</span>
        </div>
        <div class="side-b-info-item" style="background: rgb(44, 44, 44);">
            <div class="border-black " style="width:100%; background: rgb(84, 84, 84);">
                <div class="pad-all-10">
                    <div class="flex-between ">
                        <span>워싱턴 캐피탈즈 vs 보스턴 브루인스</span>
                        <span style="cursor:pointer; font-weight:bold;">X</span>
                    </div>
                    <div>
                        <span>승무패</span>
                    </div>
                </div>
                <div class="flex-between pad-all-10" style="background: rgb(130, 130, 130);font-size:1.2em; font-weight:bold;">
                    <span class="" style="">워싱턴 캐피탈즈</span>
                    <span class="orange">1.18</span>
                </div>
            </div>
            
        </div>
        <div class="side-b-btn-wrap">
            <button>전체삭제</button>
            <button>MAX 최대참여</button>
        </div>
        <div class="side-b-info-item">
            <span>합산 배당률</span>
            <span>-</span>
        </div>
        <div class="side-b-info-item">
            <span>참여루비</span>
            <div class="btn-wrap">
                <button>refresh</button>
                <input type="text" value="10,000">
            </div>
            
        </div>
        <div class="side-b-info-item" id="m-unit">
            <button>+오천</button>
            <button>+일만</button>
            <button>+오만</button>
            <button>+십만</button>
            <button>+오십만</button>
        </div>
        <div class="side-b-info-item">
            <span>적중예상루비</span>
            <span class="orange">10,000 루비</span>
        </div>
    </div>
    <div class="side-b-join">
        <button>참여하기</button>
    </div>
</div>
<div class="side-b-sport-rank-wrap">
    <div class="rank-header">
        <span>실시간 전세계에서 몰리는 경기 순위</span>
    </div>
    <div class="rank-info">
        <div class="rank-info-cate">
            <div>
                <a href="" class="sport-type-wrap">
                    <i class="fas fa-futbol"></i>
                    <span class="orange-bor-bot orange">축구</span>
                </a>
            </div>
            <div>
                <a href="" class="sport-type-wrap">
                    <i class="fas fa-baseball-ball"></i>
                    <span>야구</span>
                </a>
            </div>
            <div>
                <a href="" class="sport-type-wrap">
                    <i class="fas fa-basketball-ball"></i>
                    <span>농구</span>
                </a>
            </div>
            <div>
                <a href="" class="sport-type-wrap">
                    <i class="fas fa-hockey-puck"></i>
                    <span>아이스하키</span>
                </a>
            </div>
            <div>
                <a href="" class="sport-type-wrap">
                    <i class="fas fa-volleyball-ball"></i>
                    <span>배구</span>
                </a>
            </div>
        </div>
        <div class="rank-info-label">
            <span>순위</span>
            <span>팀</span>
            <span>오즈</span>
        </div>
        <div class="rank-info-cont">
            <div class="rank-info-team">
                <span>1</span>
                <span>맨체스터 유나이티드</span>
                <span>1.44</span>
            </div>
            <div class="rank-info-team">
                <span>2</span>
                <span>본머스</span>
                <span>1.67</span>
            </div>
            <div class="rank-info-team">
                <span>3</span>
                <span>AC 밀란</span>
                <span>1.50</span>
            </div>
            <div class="rank-info-team">
                <span>4</span>
                <span>뉴캐슬 유나이티드 FC</span>
                <span>3.00</span>
            </div>
            <div class="rank-info-team">
                <span>5</span>
                <span>AT 마드리드</span>
                <span>1.00</span>
            </div>
        </div>
    </div>
</div>
</div>
`;
document.write(side_b);