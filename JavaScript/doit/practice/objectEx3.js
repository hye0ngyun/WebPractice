
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