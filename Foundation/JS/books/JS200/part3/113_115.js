// 현재 시간을 원하는 포맷으로 출력하기 (getFullYear/getMonth/getDate)
{
  Date.prototype.yyyymmdd = function () {
    const yyyy = this.getFullYear();
    const mm =
      this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();

    return "" + yyyy + mm + dd;
  };

  const date = new Date();
  console.log(date.yyyymmdd());
  console.log();
}

// UTC 기준 날짜 출력하기 (Date.UTC)
{
  const date = new Date();
  const dateUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  console.log(date);
  console.log(new Date(dateUTC));
}

// 두 개의 날짜 사이의 경과 시간 계산하기
{
  Date.daysDiff = (date1, date2) => {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return "";

    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;
    const seconds = Math.floor((diff = diff / 1000) % 60);
    const minutes = Math.floor((diff = diff / 60) % 60);
    const hours = Math.floor((diff = diff / 60) % 24);
    const days = Math.floor((diff = diff / 24));
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  var from = new Date(2000, 0, 1);
  var to = new Date(
    from.getFullYear() + 1,
    from.getMonth() + 3,
    from.getDate() + 5,
    from.getHours() + 4,
    from.getMinutes() + 30,
    from.getSeconds() + 50
  );

  console.log(`from > ${from}`);
  console.log(`to   > ${to}`);
  console.log(Date.daysDiff(from, to));
}
