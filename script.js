    let strBtn = document.getElementById("strBtn");
    let answer_A = document.getElementById("answer_A");
    let answer_B = document.getElementById("answer_B");
    let answer_C = document.getElementById("answer_C");
    let answer_D = document.getElementById("answer_D");
    let ctdn_timer = document.getElementById("ctdn_timer");
    let home_container =  document.getElementById("home_container");
    let quiz_container = document.getElementById("quiz_container");
    let question_head = document.getElementById("question_head");
    let correct_ans = document.getElementById("correct_ans");    
    let time_left = true;
    let time_began= false;
    let time = 100;
    let out="";
    let scores= [];
    
    let score = 0;
    
    let i = 0;



let questions = [
{
    question: "Question: What are people who write code called?",
    imageSrc: "",
    answerChoice: ["A) Writers", "B) Coders", "C) Developers", "D) Hackers"],
    correct_ans: 2
}, 
{
    question: "Question: What does HTML stand for?",
    imageSrc: "",
    answerChoice: ["A) Hyper Text Markup Language", "B) Hyper Text Marketing Language", "C) Hyper Text Marking Language", "D) None of the above"],
    correct_ans: 0
},
{
    question: "Question: What does CSS stand for?",
    imageSrc: "",
    answerChoice: ["A) Computer Style Sheets", "B) Colourful Style Sheets ", "C) Cascading Style Sheets ", "D) Candy Style Sheets"],
    correct_ans: 2
}, 
{
    question: "Question: Which HTML element is used to put the JavaScript?",
    imageSrc: "",
    answerChoice: ["A) js tag", "B) script tag", "C) JavaScript tag", "D) None of the above"],
    correct_ans: 1
},
{
    question: "Question: JavaScript is a _______ language?",
    answerChoice: ["A) Coding ", "B) Application", "C) programming", "D) scripting"],
    correct_ans: 3
}];




var ctdn_timerInterval = setInterval(setctdn_timer, 1000);

function setctdn_timer() {
        if (time_began)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
       
        }
        document.getElementById("timer").innerHTML = time;
    }


strBtn.addEventListener("click", function() {
    quiz_container.style.display = "block";
    home_container.style.display ="none";
    ctdn_timer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setctdn_timer();
    setQuizQuestions();
    time_began= true;
});



function setQuizQuestions() {
        question_head.textContent = questions[i].question;
        answer_A.textContent = questions[i].answerChoice[0]; 
        answer_B.textContent = questions[i].answerChoice[1]; 
        answer_C.textContent = questions[i].answerChoice[2]; 
        answer_D.textContent = questions[i].answerChoice[3]; 
        };


answer_A.addEventListener('click', function(event) {
        event.stopPropagation();
        correct_ans= questions[i].correct_ans;
        console.log("correct_ans " + correct_ans);
        
        if (0 === correct_ans) { 
            
            document.getElementById("ans_response").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("ans_response").innerHTML = "";
                },
                3000
            );
            
            score++;    
            
            document.getElementById("score").innerHTML = score;
        } else {
            time_left -= 5;
        
            document.getElementById("ans_response").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("ans_response").innerHTML = "";
                    },
                    3000
                );
        }
        if (i >= questions.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answer_B.addEventListener('click', function(event) {
    event.stopPropagation();
    correct_ans = questions[i].correct_ans;
    console.log(correct_ans);
        if (1 === correct_ans) { 
            document.getElementById("ans_response").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("ans_response").innerHTML = "";
                    },
                    3000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_left -= 5;
            document.getElementById("ans_response").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("ans_response").innerHTML = "";
                    },
                    3000
                );
        }
        if (i >= questions.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answer_C.addEventListener('click', function(event) {
    event.stopPropagation();
    correct_ans = questions[i].correct_ans;
    console.log(correct_ans);
    if (2 === correct_ans) { 
        document.getElementById("ans_response").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ans_response").innerHTML = "";
                },
                3000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_left -= 5;
        document.getElementById("ans_response").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("ans_response").innerHTML = "";
                },
                3000
            );
    }
    if (i >= questions.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answer_D.addEventListener('click', function(event) {
    event.stopPropagation();
    correct_ans= questions[i].correct_ans.value;
    console.log(correct_ans);
    if (3 === correct_ans) { 
        document.getElementById("ans_response").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ans_response").innerHTML = "";
                },
                3000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_left -= 5;
        document.getElementById("ans_response").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("ans_response").innerHTML = "";
                },
                3000
            );
    }
    if (i >= questions.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        //end quiz
        function end_quiz(){
            document.getElementById("game_done").style.display= "block";
            document.getElementById("quiz_container").style.display="none";
            document.getElementById("ctdn_timer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("ans_response").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

            function submit_score() {
             scores.push(document.getElementById("initials").value + " " + score);
             view_scores();
            }

        
        
        function view_scores(){
        
       
            document.getElementById("quiz_container").style.display="none";
            document.getElementById("game_done").style.display= "none";
            document.getElementById("scores_results").style.display="block";
        
            out="";
            for(let k=0; k<scores.length; k++){
                 out = out + "  " + scores[k];
            }
            document.getElementById("scores").innerHTML= out;                
             clear_up();
        }

        function go_home(){	
                document.getElementById("scores_results").style.display= "none";
                document.getElementById("home_container").style.display= "block";
                clear_up();
        }
        
        
        function clear_hs(){
            scores = [];
            view_scores();
            
          }
        
        
        function clear_up(){
        
        time=75;
        time_left=true;
        time_began=false;
        i=0;
        score=0;
        }