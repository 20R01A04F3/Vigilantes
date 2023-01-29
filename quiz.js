const quizDB = [
 {
    question:"q1:who i sahith?",
    a:"hshdbsh",
    b:"hshdbsh",
    c:"hshdbsh",
    d:"hshdbsh",
    ans:"ans4"
 },
 {
    question:"q2:who i sahith?",
    a:"hshdbsh",
    b:"hshdbsh",
    c:"hshdbsh",
    d:"hshdbsh",
    ans:"ans3"
 },
 {
    question:"q3:who i sahith?",
    a:"hshdbsh",
    b:"hshdbsh",
    c:"hshdbsh",
    d:"hshdbsh",
    ans:"ans3"
 },
 {
    question:"q4:who i sahith?",
    a:"hshdbsh",
    b:"hshdbsh",
    c:"hshdbsh",
    d:"hshdbsh",
    ans:"ans1"
 }

];
 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');
let count=0;
let score=0;
const loadquestion=() =>{
        const questionlist = quizDB[count];
        question.innerText = questionlist.question;
         option1.innerText = questionlist.a;
         option2.innerText = questionlist.b;
         option3.innerText = questionlist.c;
         option4.innerText = questionlist.d;
};
loadquestion();
getCheckAnswer = () => {
   let answer;
   answers.forEach((curAnsELem) =>{
      if(curAnsELem.checked)
      {
        answer = curAnsELem.id;
      }
       
   });
   return answer;

};
submit.addEventListener('click',() =>{
   const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);
   if(checkedAnswer==quizDB[count].ans){
      score++;
   }
   count++;
   if(count < quizDB.length){
      loadquestion();
   }
   else{
      showScore.innerHTML=`
      <h3> your scored ${score}/${quizDB.length} </h3>
      <button class ="btn" onclick ="location.reload()">play again</button>
       `;
       showScore.classList.remove('scoreArea');
       }

   
});