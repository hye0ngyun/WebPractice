
        var dayList = ['일', '월', '화', '수', '목', '금', '토'];
        var date = new Date();
        var accent = new Date('2021/1/25');
        var passedTime = date.getTime() - accent.getTime();
        var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#accent').innerHTML = passedDay + '일';

        var first = new Date('2021/3/7');
        passedTime = date.getTime() - first.getTime();
        passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#date-first').innerHTML = 'D' + passedDay + ` (${first.getFullYear()}/${first.getMonth() + 1}/${first.getDate()} ${dayList[first.getDay()]})`;

        var second = new Date('2021/04/24');
        passedTime = date.getTime() - second.getTime();
        passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#date-second').innerHTML = 'D' + passedDay + ` (${second.getFullYear()}/${second.getMonth() + 1}/${second.getDate()} ${dayList[second.getDay()]})`;

        var start = new Date('2021/03/2');
        passedTime = date.getTime() - start.getTime();
        passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#date-start').innerHTML = 'D' + passedDay + ` (${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate()} ${dayList[start.getDay()]})`;
        
        var pre_enrolment = new Date('2021/02/15');
        passedTime = date.getTime() - pre_enrolment.getTime();
        passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#date-pre-enrolment').innerHTML = 'D' + passedDay + ` (${pre_enrolment.getFullYear()}/${pre_enrolment.getMonth() + 1}/${pre_enrolment.getDate()} ${dayList[pre_enrolment.getDay()]} ~ ${pre_enrolment.getFullYear()}/${pre_enrolment.getMonth() + 1}/${pre_enrolment.getDate()+2} ${dayList[pre_enrolment.getDay()+2]})`;

        var enrolment = new Date('2021/02/18');
        passedTime = date.getTime() - enrolment.getTime();
        passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
        document.querySelector('#date-enrolment').innerHTML = 'D' + passedDay + ` (${enrolment.getFullYear()}/${enrolment.getMonth() + 1}/${enrolment.getDate()} ${dayList[enrolment.getDay()]})`;

        var today = new Date();
        document.querySelector('#date-today').innerHTML = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()} ${dayList[today.getDay()]}`