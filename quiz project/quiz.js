//jshint esversion :6
const data1= [
    {
        id:1,
        question: "Which of these is actually a fish ?",
        answers:[
        { answer: "swordfish", isCorrect: true},
        { answer: "jellyfish", isCorrect: false},
        { answer: "starfish", isCorrect: false},
        { answer: "crayfish", isCorrect: false},
        ],

    },
    {
        id:2,
        question:"A flutter is a group of : ?",
        answers:[
            { answer: "bees",isCorrect: false},
            { answer: "penguins",isCorrect: false},
            { answer: "butterflies",isCorrect: true},
            { answer: "camels",isCorrect: false},
        ],
    },
    {
        id : 3,
        question:"A group of which animal reffered as wake?",
        answers:[
            {answer: "bats",isCorrect: false},
            {answer: "vultures",isCorrect: true},
            {answer: "ants",isCorrect: false},
        ],
    },

];




const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const answersContainer = document.querySelector(".answers");
const questions = document.querySelector(".question");
const play = document.querySelector(".play");
const submit = document.querySelector(".submit");

let qIndex  =0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;
const playAgain = () =>
{
     qIndex  =0; 
     correctCount = 0;
     wrongCount = 0;
     total = 0;
    showQuestion(qIndex);
}

play.addEventListener("click", ()=>{
    resultScreen.style.display = "none"
    gameScreen.style.display= "block"
    playAgain();
})
const showResult = () =>{
    resultScreen.style.display= "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent = 
    ` Correct Answer : ${correctCount} `
    resultScreen.querySelector(".wrong").textContent = 
    ` Wrong Answer : ${wrongCount}`
    resultScreen.querySelector(".score").textContent=
    `Score : ${(correctCount-wrongCount)*10}`
}
const showQuestion = (qNumber) => {
    if(qIndex === data1.length) return showResult()
    selectedAnswer= null
    questions.textContent = data1[qNumber].question;
    answersContainer.innerHTML = data1[qNumber].answers.map((item,index)=>
        `
                    <div class="answer">
                        <input name="answer" type="radio" id=${index} value=${item.isCorrect}/>
                        <label for=${index}>${item.answer}</label>
                    </div>
        `
    ).join("");//to remove comma used join

    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
                    selectedAnswer = e.target.value;
                    console.log(selectedAnswer);
        }
    )})
};

const submitAnswer = () =>
{

    submit.addEventListener("click",()=> 
    {
        if(selectedAnswer !== null){
        selectedAnswer === "true/" ? correctCount++ : wrongCount++ 
        qIndex++ 
        showQuestion(qIndex)}
        else{
            alert("submit answer please")
        }
    });
    
}
showQuestion(qIndex)
submitAnswer()