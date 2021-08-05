function solution(participant, completion) {
  let answer = "";
  for (let comp of completion) {
    participant.splice(participant.indexOf(comp), 1);
  }
  answer = participant.toString();
  return answer;
}
