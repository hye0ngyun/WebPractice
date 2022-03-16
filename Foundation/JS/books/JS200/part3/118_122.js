//118 정규표현식으로 대응되는 문자열 위치 확인하기 (search)
{
  const str = "To lose your path is the way to find that path";

  const regex1 = /path/;
  console.log(typeof regex1); // object
  const regex2 = /q/;
  const regex3 = /t/g;
  const regex4 = /t/gi;

  console.log(str.search(regex1));
  console.log(str.search(regex2));
  console.log(str.search(regex3));
  console.log(str.search(regex4));
  console.log(str.match(regex4));
  console.log(regex1.exec(str));
  console.log("------------------");
}

// 119 정규표현식으로 문자열 확인하기 (match)
{
  const str = "To lose your path is the way to find that path to";

  const sensitiveCaseRegex = /to/;
  const ignoreAllCaseRegex = /to/gi;
  const findRangeRegex = /[a-f]\w+/;
  const findAllRangeRegex = /[a-f]\w+/gi;

  console.log(str.match(sensitiveCaseRegex));
  console.log(str.match(ignoreAllCaseRegex));
  console.log(str.match(findRangeRegex));
  console.log(str.match(findAllRangeRegex));
  console.log("------------------");
}

// 120 정규표현식으로 특정 문자의 포함 여부 확인하기 (test)
{
  const numRegExp = /[0-9]+/;
  const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
  const emailRegEx = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;
  // [-_.]? ==> -,_,. 가 있어도되고 없어도 된다.

  console.log(numRegExp.test(12345)); // true
  console.log(numRegExp.test("test")); // false
  console.log(phoneRegExp.test("010-1234-5678")); // true
  console.log(phoneRegExp.test("02-1234-5678")); // false
  console.log(emailRegEx.test("test1234@naver.com")); // true
  console.log(emailRegEx.test("t-est1234@naver.com")); // false
  console.log(emailRegEx.test("-test1234@naver.com")); // true

  console.log("------------------");
}

// 121 정규표현식으로 문자열 변환하기 (exec)
{
  const str = "Java is not in JavaScript";
  const result1 = /java/gi.exec(str);
  console.log(result1[0]);
  console.log(result1.index);
  console.log(result1.input);

  const nums = '"1", "2", "3"';
  const regex = /\d+/g;
  console.log(regex.exec(nums));
  while ((result2 = regex.exec(nums))) {
    console.log(result2, regex.lastIndex);
  }
  console.log("------------------");
}

// 122 정규표현식으로 문자열 치환하기 (replace)
{
  console.log("2022-03-16 07-23-14".replace("-", ":"));
  console.log("2022-03-16 07-23-14".replace(/-/g, ":"));
  console.log("2022-03-16 07-23-14".replace(/\d/g, 9));
  console.log("2022-03-16 07-23-14".replace(/\d/g, "9"));

  const littleWomen = "Meg March, Jo March, Beth March, Amy March";
  // $&는 일치한 문자열을 그대로 대체한다.
  console.log(littleWomen.replace(/\w+ March/gi, "Mrs.$&"));
  console.log(
    littleWomen.replace(/\w+ March/gi, (str, d1, d2, d3, d4, offset, s) => {
      let tag = "";
      if (/Meg/.test(str)) tag = "첫째";
      else if (/Jo/.test(str)) tag = "둘째";
      else if (/Beth/.test(str)) tag = "셋째";
      else if (/Amy/.test(str)) tag = "넷째";

      console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
      return tag;
    })
  );

  const name = "March Amy";
  // $N은 그룹의 순서대로 문자열을 반환한다.
  console.log(name.replace(/(March) (Amy)/, "$2 $1")); // Amy March
  console.log(
    name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
      console.log(str);
      console.log(`${second} is fname, ${first} is first name`);
      return `${second} ${first}`;
    })
  );
}
