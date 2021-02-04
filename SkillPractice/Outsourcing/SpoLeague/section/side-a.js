let side_a = `
<div class="side-a">
            <div class="chat-wrap">
                <div class="chat-tap">
                    <a href="" class="active">공개채팅</a>
                    <a href="">채팅방</a>
                </div>
                <div class="chat-main">
                    <!-- <textarea name="" id="" cols="40" rows="11" style="resize: none;"></textarea> -->
                    <iframe src="side-a.html" frameborder="0"></iframe>
                </div>
                <div class="chat-input">
                    <i class="fas fa-dot-circle orange back-black"></i>
                    <input type="text" placeholder="입력하세요">
                    <input type="submit" value="전송">
                </div>
            </div>
            <div class="today-game">
                <div class="today-gmae-header">
                    <span>오늘의 경기 : </span>
                    <span id="date-today"></span>
                </div>
                <div class="today-game-type">
                    <div>
                        <a href="" class="sport-type-wrap">
                            <i class="fas fa-futbol orange pd-r-5"></i>
                            <span>축구</span>
                        </a>
                        <a href="">link</a>
                    </div>
                    <div>
                        <a href="" class="sport-type-wrap">
                            <i class="fas fa-baseball-ball orange pd-r-5"></i>
                            <span>야구</span>
                        </a>
                        <a href="">link</a>
                    </div>
                    <div>
                        <a href="" class="sport-type-wrap">
                            <i class="fas fa-basketball-ball orange pd-r-5"></i>
                            <span>농구</span>
                        </a>
                        <a href="">link</a>
                    </div>
                    <div>
                        <a href="" class="sport-type-wrap">
                            <i class="fas fa-hockey-puck orange pd-r-5"></i>
                            <span>아이스하키</span>
                        </a>
                        <a href="">link</a>
                    </div>
                    <div>
                        <a href="" class="sport-type-wrap">
                            <i class="fas fa-volleyball-ball orange pd-r-5"></i>
                            <span>배구</span>
                        </a>
                        <a href="">link</a>
                    </div>
                    <div>
                        <a href="">
                            <i class="fas fa-headset orange pd-r-5"></i>
                            <span>기타</span>
                        </a>
                        <a href="">link</a>
                    </div>
                </div>
            </div>
        </div>
`;
document.write(side_a);