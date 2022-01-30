/* 입력한 값이 패턴에 유효한지 확인하는 함수 */
/* 입력된 타입(type)에 따라 값(value)이 유효한지 확인 */
/* 정상: return true, 비정상: return false */
function checkPatternValidation(type, value) {
  /* -----정규식----- */
  const collectionNameRegex = /^[a-zA-Z][a-zA-Z0-9+.\-*$_+:@&=,\'!~;?!\.*]*$/;
  const analyzerFilterRegex = /^[a-z|A-Z|0-9]+$/;
  const kmaOptionRegex = /^[A-Za-z0-9+\-*+]*$/;
  const nameRegex = /^[가-힣a-zA-Z0-9]+$/;
  const idRegex = /^[a-zA-Z0-9][a-zA-Z0-9]*$/;
  const ipRegex = /^(1|2)?\d?\d([.](1|2)?\d?\d){3}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^[0-9]{3}[-]{1}[0-9]{3,4}[-]{1}[0-9]{4}$/;
  const urlRegex = /(^http[s]?):\/\/.+?$/;

  /* -----타입 체크----- */
  switch (type) {
    case "coll":
      return collectionNameRegex.test(value);
    case "analyzerFilter":
      return analyzerFilterRegex.test(value);
    case "kmaOption":
      return kmaOptionRegex.test(value);
    case "name":
      return nameRegex.test(value);
    case "id":
      return idRegex.test(value);
    case "ip":
      return ipRegex.test(value);
    case "email":
      return emailRegex.test(value);
    case "phone":
      return phoneRegex.test(value);
    case "url":
      return urlRegex.test(value);
    default:
      return false;
  }
}