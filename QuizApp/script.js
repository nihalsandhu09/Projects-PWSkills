const questions = [
 
    {
        question : "which is the largest animal in world?",
        answers : [
            { text: "shark" ,correct:false, },
            { text: "Blue whale" ,correct:true, },
            { text: "Elephant" ,correct:false, },
            { text: "Giraffe" ,correct:false, }
        ]
    },

    {
       
        question : "which is the smallest continent in world?",
        answers : [
            { text: "Asia" ,correct:false, },
            { text: "Australia" ,correct:true, },
            { text: "Arctic" ,correct:false, },
            { text: "Africa" ,correct:false, }
        ]


    },
    {
       
        question : "which is the largest desert in the world?",
        answers : [
            { text: "kalhari" ,correct: false, },
            { text: "Gobi" ,correct: true, },
            { text: "Sahara" ,correct: false, },
            { text: "Antartica" ,correct: true, }
        ]


    }


];

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestiionIndex = 0;
let score = 0;

function startQuiz(){

     currentQuestiionIndex = 0;
     score = 0;
     nextButton.innerHTML = 'Next';
     showQuestion()

}

function showQuestion(){

    resetState()
    let currentQuestion = questions[currentQuestiionIndex];
    let questionnumber = currentQuestiionIndex + 1;
    questionElement.innerHTML = questionnumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn')
    answerButtons.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct = true;
    }
    button.addEventListener('click',selectAnswer)
    })

}


function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
    }
}

  function selectAnswer(e){
  const selectBtn = e.target;
  const iscorrect = selectBtn.dataset.correct == "true";
  if(iscorrect){

    selectBtn.classList.add('correct');
  }else{
    selectBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button)=>{
  if(button.dataset.correct === 'true'){
    button.classList.add('correct');
  }
  button.disabled = true;
  })
  nextButton.style.display = 'block';
}
startQuiz()