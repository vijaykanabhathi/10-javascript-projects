const questions=[
    {
        question: "What is the capital of France?", 
        answers:[
            {text:"Paris", correct:true},
            {text:"London"},
            {text:"Berlin"},
            {text:" Madrid"}
        ]
    },
    {
        question: "who was the first governer of india" , 
        answers:[
            {text:"Warren Hastings"},
            {text:"William Bentick",correct:true},
            {text:"Lord Delhousien"},
            {text:"Lord Canning"}
        ]
    },
    {
        question: "fertility of the soil can be improved by______?" , 
        answers:[
            {text:"Adding living earthworms",correct:true},
            {text:"Adding dead earthworms"},
            {text:"Removing dead earthworms"},
            {text:"Removing living earthworms and adding dead earthworms"}
        ]
    },
    {
        question: "agriculture commodities are graded with" , 
        answers:[
            {text:"ISI"},
            {text:"eco products"},
            {text:"agmark",correct:true},
            {text:"green product"}
        ]
    }
];

const questionelement=document.getElementById( 'question' );
const answerbutton=document.getElementById( 'answer-buttons' );
const nextbutton=document.getElementById( 'next-btn' );

let currentQuestionIndex=0;
let score= 0;

function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="next";
    showquestions();    
}

function showquestions(params) {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionno=currentQuestionIndex+1;
    questionelement.innerHTML=questionno + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener( 'click',selectanswer);
    })
}
function resetState() {
    nextbutton.style.display='none';
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
      }    
}
function selectanswer(e) {
    const selectbtn=e.target;
    const isCorrect=selectbtn.dataset.correct==="true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }

    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}

function showScore() {
    resetState();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
    
}


function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showquestions();
     } else{
            showScore();
        }
}





    nextbutton.addEventListener("click", ()=>{
        if(currentQuestionIndex<questions.length){
            handlenextbutton();
        }
        else{
            startquiz();
        }
    });


startquiz();