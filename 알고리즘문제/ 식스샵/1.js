function solution(papers) {
  var answer = 0;
  var answers = 0;
  var result;

  papers.sort((a,b)=>{
    return b-a;
  });
  for(let i =0;i<papers.length;i++){
    const add = answer+= papers[i];

   if(add >= (i+1) ** 2){
     return i;
    if(add < (i+1) ** 2){
      return i;
    }
    answers = i;
   }
return answers;
  
  }
//  papers.map((paper,index)=>{
//    const add = answer = papers[index];
//    answers.push(add);
//    if(answers[index] >= (index+1) ** 2 && answers[index] < (index+1) ** 2){
//      console.log(answers.length);
//    }
//  })
  return answers;
}

console.log(solution([7, 5, 8, 10, 6, 9, 5]))


// g-index는 연구자의 연구 업적을 평가하는 지표의 하나입니다. 어떤 연구자가 발표한 논문의 개수가 N일 때 g-index는 다음과 같습니다.

// g-index : N개의 논문 중 상위 g개의 논문의 인용 횟수의 합이 g2 이상이 되도록 하는 g 값 중에서 최댓값
// 어떤 연구자가 발표한 N개의 논문의 각각의 인용 횟수 K가 담긴 배열이 매개변수 paper로 주어질 때, 이 연구자의 g-index를 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// 논문의 개수 N : N은 1,000이하의 자연수
// 각 논문의 인용 횟수 K: K는 0 이상 10,000 이하의 정수

// paper	result
// [1, 0, 0, 3, 0, 1]	2
// [7, 5, 8, 10, 6, 9, 5]	7
// [3, 0, 3, 0, 3, 0]	3