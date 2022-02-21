// 문자열 양 끝의 공백 없애기(trim)
{
  const sentences = [
    "        ABC abc",
    "ABC    abc         ",
    `  first 
  second third 
      forth
      sentence`,
  ];
  console.log(sentences);
  const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach((element) => {
      filtered.push(element.trim());
    });
    return filtered;
  };

  console.log(filterSentence(sentences));
}
