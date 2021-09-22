{
  var month = 9;
  var monthName;

  switch (month) {
    case 1:
      monthName = 'Jan';
    case 2:
      monthName = 'Feb';
    case 3:
      monthName = 'Mar';
    case 4:
      monthName = 'Apr';
    case 5:
      monthName = 'May';
    case 6:
      monthName = 'Jun';
    case 7:
      monthName = 'Jul';
    case 8:
      monthName = 'Aug';
    case 9:
      monthName = 'Sep';
    case 10:
      monthName = 'Oct';
    case 11:
      monthName = 'Nov';
    case 12:
      monthName = 'Dec';
    default:
      monthName = 'Invalid month';
  }

  console.log(monthName);
}

{
  var month = 9;
  var monthName;

  switch (month) {
    case 1:
      monthName = 'Jan';
      break;
    case 2:
      monthName = 'Feb';
      break;
    case 3:
      monthName = 'Mar';
      break;
    case 4:
      monthName = 'Apr';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'Jun';
      break;
    case 7:
      monthName = 'Jul';
      break;
    case 8:
      monthName = 'Aug';
      break;
    case 9:
      monthName = 'Sep';
      break;
    case 10:
      monthName = 'Oct';
      break;
    case 11:
      monthName = 'Nov';
      break;
    case 12:
      monthName = 'Dec';
      break;
    default:
      monthName = 'Invalid month';
  }

  console.log(monthName);
}

{
  var year = 2021;
  var month = 2;
  days = 0;

  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days = 31;
      break;
    case 4: case 6: case 9: case 11:
      days = 30;
      break;
    case 2:
      days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
  }
  console.log(days);
}