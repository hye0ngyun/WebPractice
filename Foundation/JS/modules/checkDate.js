/* 입력된 날짜가 유효한지 확인하는 함수 */
/* 입력된 날짜(date)를 날짜 포맷(dateFormat)에 맞춰 자른 뒤 연월일시분초가 정확한 날짜인지 확인 */
/* 정상: return 1, 비정상: return 0 */
function checkDate(date, dateFormat) {
  /* -----날짜를 타입 별로 자르기 위한 인덱스----- */
  const yIdx = dateFormat.indexOf('y'); // 연 시작 인덱스
  const yLastIdx = dateFormat.lastIndexOf('y'); // 연 끝 인덱스
  const MIdx = dateFormat.indexOf('M'); // 월 시작 인덱스
  const MLastIdx = dateFormat.lastIndexOf('M'); // 월 끝 인덱스
  const dIdx = dateFormat.indexOf('d'); // 일 시작 인덱스
  const dLastIdx = dateFormat.lastIndexOf('d'); // 일 끝 인덱스
  const HIdx = dateFormat.indexOf('H'); // 시 시작 인덱스
  const HLastIdx = dateFormat.lastIndexOf('H'); // 시 끝 인덱스
  const mIdx = dateFormat.indexOf("m"); // 분 시작 인덱스
  const mLastIdx = dateFormat.lastIndexOf("m"); // 분 끝 인덱스
  const sIdx = dateFormat.indexOf('s'); // 초 시작 인덱스
  const sLastIdx = dateFormat.lastIndexOf('s'); // 초 끝 인덱스

  /* -----인덱스를 이용해 날짜 자르며 validation check----- */
  let year = Number(date.slice(yIdx, yLastIdx + 1));
  if (year && (0 > year)) { return 0; }
  let month = Number(date.slice(MIdx, MLastIdx + 1));
  if (month && (0 > month || month > 12)) { return 0; }
  let day = Number(date.slice(dIdx, dLastIdx + 1));
  let dateObj = new Date(year, month, 0);
  let lastDay = dateObj.getDate();
  if (day && (0 > day || day > lastDay)) { return 0; }
  let hour = Number(date.slice(HIdx, HLastIdx + 1));
  if (hour && (0 > hour || hour > 60)) { return 0; }
  let minute = Number(date.slice(mIdx, mLastIdx + 1));
  if (minute && (0 > minute || minute > 60)) { return 0; }
  let second = Number(date.slice(sIdx, sLastIdx + 1));
  if (second && (0 > second || second > 60)) { return 0; }

  return 1;
}

export default checkDate;