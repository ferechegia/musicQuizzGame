/*
let questions = [
    {
      prompt: "Who released their first album in 2001?",
      answer: "a",
      response: "a"
    },
   {
      prompt: "Who release their first EP in 1986?",
      answer: "a" 
    },
     {
      prompt: "Who released and album called Nevermind?",
      anwser: "a" 
    },
     {
      prompt: "Who was shot to death in 1996?",
      answer: "a" 
    },
     {
      prompt: "Who released an album called Surfer Rosa?",
      answer: "a" 
    },
       {
      prompt: "Who revolutionized the punk scene in th 70s?",
      answer: "a" 
    },
  ]
  let score = 0
  
  
  for (let i=0; i < questions.legnth; i+=1) {
    let response = window.prompt(questions[i].prompt);
      if(response == questions[i].answer){
        score++
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
  }
  alert("You got " + score + "/" + questions.length)
    */

  


  
  // GET ELEMENTS FROM HTML
  
  const homeScreen = document.querySelector('.homeScreen')
  const questionContainerElement = document.getElementById('question-container')
  const gameOverScreen = document.querySelector('.gameOverScreen')
  const reStartBtn = document.getElementById('reStart-btn')
  const startBtn = document.getElementById('start-btn')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answer-buttons')
  const btns = document.querySelectorAll('.btn')
  const btnImg = document.querySelectorAll('.btn img')
  const setTimer =document.getElementById('timer')
  let currentTime = 30


  let selctedAnswer 
  let random
  let scoreElement = document.querySelector('#score')
  let score = 1
  let gameMusic = document.getElementById("music");
  gameMusic.volume = 0.1; // Played in Gameplay Page




  // GLOBAL VARIABLES
  let animationId = 0
  let isGameOver = false
  
  let shuffledQuestions, currentQuestionIndex 


  // FUNCTIONS





  const questions = [
    {
      questions: 'Who released their first album in 2001?',
      answers: [
        {img: "./img/theClashCard.svg", text: 'The Clash', correct: false},
        {img: "./img/jimiHendrix.svg", text: 'Jimi Hendrix', correct: false},
        {img: "./img/theStrokesCard.svg", text: 'The Strokes', correct: true},
        {img: "./img/kinksCard.svg", text: 'The Kinks', correct: false},
      ],
    },
    {
      questions: 'Who release their first EP in 1986?',
      answers: [
        {img: "./img/acdcCard.svg", text: 'ACDC', correct: false},
        {img: "./img/ledZepCard.svg", text: 'Led Zeppelin', correct: false},
        {img: "./img/blackFlagCard.svg", text: 'Black Flag', correct: false},
        {img: "./img/gunsRosesCard.svg", text: 'Guns & Roses', correct: true},
      ],
    },
    {
      questions: 'Who released and album called Nevermind?',
      answers: [
        {img: "./img/nirvanaCard.svg", text: 'Nirvana', correct: true},
        {img: "./img/rollingStonescard.svg", text: 'The Rolling Stones', correct: false},
        {img: "./img/stoogesCard.svg", text: 'The Stooges', correct: false},
        {img: "./img/theDoorsCard.svg", text: 'The Doors', correct: false},
      ],
    },
    {
      questions: 'Who was shot to death in 1996?',
      answers: [
        {img: "./img/tupacCard.svg", text: 'Tupac Shakur', correct: true},
        {img: "./img/beatlesCard.svg", text: 'The Beatles', correct: false},
        {img: "./img/radioheadCard.svg", text: 'Radiohead', correct: false},
        {img: "./img/cureCard.svg", text: 'The Cure', correct: false},
      ],
    },
    {
      questions: 'Who released the album Surfer Rosa?',
      answers: [
        {img: "./img/biggieCard.svg", text: 'Notorious B.I.G', correct: false},
        {img: "/img/pixiesCard.svg",text: 'The Pixies', correct: true},
        {img: "./img/arcticMonkeysCard.svg", text: 'Arctic Monkeys', correct: false},
        {img: "./img/sonicYouthCard.svg", text: 'Sonic Youth', correct: false},
        
      ],
    },
    {
      questions: 'Who revolutionized the punk scene in th 70s',
      answers: [
        {img: "./img/bobCard.svg", text: 'Bob Marley', correct: false},
        {img: "./img/sexPistolsCard.svg", text: 'The Sex Pistols', correct: true},
        {img: "./img/offspringCard.svg", text: 'The Offspring', correct: false},
        {img: "./img/joyDivisionCard.svg", text: 'Joy Division', correct: false},
        
      ],
    },
    {
      questions: 'Who combined jazz and hip-hop?',
      answers: [
        {img: "./img/theRoots.svg", text: 'The Roots', correct: true},
        {img: "./img/parcels.svg", text: 'Parcels', correct: false},
        {img: "./img/theSmiths.svg", text: 'The Smiths', correct: false},
        {img: "./img/mgmt.svg", text: 'MGMT', correct: false},
        
      ],
    },
    {
      questions: 'Who rote the song like a rolling stone?',
      answers: [
        {img: "./img/bobDylan.svg", text: 'Bob Dylan', correct: true},
        {img: "./img/velvetUnderground.svg", text: 'The Velvet Underground', correct: false},
        {img: "./img/buffaloSpringfield.svg", text: 'Buffalo Springfield', correct: false},
        {img: "./img/mumfordAndSons.svg", text: 'Mumford & Sons', correct: false},
      ],
    },
    {
      questions: 'Who rote the song like a California Girl?',
      answers: [
        {img: "./img/pinkFloyd.svg", text: 'Pink Floyd', correct: false},
        {img: "./img/eagles.svg", text: 'The Eagles', correct: false},
        {img: "./img/theWho.svg", text: 'The Who', correct: false},
        {img: "./img/beachBoys.svg", text: 'The Beach Boys', correct: true},
      ],
    },
    {
      questions: 'Who expanded folk rock in UK?',
      answers: [
        {img: "./img/aerosmith.svg", text: 'Aerosmith', correct: true},
        {img: "./img/queen.svg", text: 'The Velvet Underground', correct: false},
        {img: "./img/buffaloSpringfield.svg", text: 'Buffalo Springfield', correct: false},
        {img: "./img/mumfordAndSons.svg", text: 'Mumford & Sons', correct: false},
      ],
    },
  ]
 
  
  function startGame() {
    console.log('Started')
    homeScreen.style.display = 'none';
    questionContainerElement.style.display = 'block'
    gameOverScreen.style.display = 'none'
    
    printRandomAnswer()

    /* shuffledQuestions = questions.sort(() => Math.random() - .5)
       currentQuestionIndex = 0 
       questionContainerElement.classList.remove('hide')
       setNextQuestion() */

    
    /*
       if(isGameOver){
      cancelAnimationFrame(animationId)
    }else{
      animationId =requestAnimationFrame(startGame)
    }*/

  }


  
  function reStartGame() {
    console.log('Re Started')
    homeScreen.style.display = 'block'
    questionContainerElement.style.display = 'none'
    gameOverScreen.style.display = 'none'

  }    
  


  function randomAnswer() {
    console.log('You chose the answer')
    let randomNumber = (Math.floor(Math.random()*questions.length))
    return questions[randomNumber]
  }
  
  
  function printRandomAnswer() {
    random = randomAnswer(questions)
    questionElement.innerText = random.questions
    
   // btns.innerHTML = random.answers.img 

    console.log(btnImg)
    random.answers.forEach((answer, index) => {
      btns[index].innerText = answer.text
      btns[index].innerHTML = answer.text + `<img src='${answer.img}'/>` 
      console.dir(btns[index]) 
      // btnImg[index].outerHTML = answer.img,
      // console.dir(btnImg[index])
    }) 
    countDown()
  }

    function countDown() {
      setInterval(() => {
          currentTime-=1
          setTimer.innerText = currentTime
          console.log(gameOverScreen)

      if(currentTime <= 0) {
        isGameOver = true
        console.log(score=0)
        clearInterval()
      }
    },1000)
  }
   

    /*
    if (isGameOver = false) {
      setTimeout(() => {
        setTimer.innerText = currentTime-=1
        console.log(currentTime-=1, 'count down')
      },1000)
    }else if(currentTime === 0) {
      isGameOver = true
      clearInterval()
    }else{
      clearInterval()
    }
  }
  */



  function showQuestion(question) {
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
    
 /* function checkErrors() {
    if () {
      
    } else {
      
    }
  }
  */

function checkAnswer() {
  random.answers.forEach((answer, index) => {
    if (answer.correct === true) {
      if (selctedAnswer === answer.text) {
      console.log('correct')
      score+=1
      scoreElement.innerHTML = score
      printRandomAnswer()
      countDown()
      clearInterval()
    }
    else {
          console.log('incorrect')
          gameOverScreen.style.display = 'block';
          questionContainerElement.style.display= 'none';
        }
    }
  })
}




  //ADDEVENTLISTENERS 

  window.addEventListener("load", () => {
    homeScreen.style.display = "block";
    questionContainerElement.style.display = 'none'
    gameOverScreen.style.display = 'none'

    startBtn.addEventListener("click", () => {
      console.log("start button pushed!");
      startGame();
    });

    reStartBtn.addEventListener("click", () => {
      console.log("re start button pushed!")
      reStartGame();
    });
  });
  
  btns.forEach((eachButton) => {
    eachButton.addEventListener("click", () => {
      console.log(eachButton.innerText);
      selctedAnswer = eachButton.innerText
      checkAnswer()
    });
  }) 
  
  /*
window.btn.addEventListener("click", () => {
    console.log("card selected");
   //  showQuestion(shuffledQuestions[currentQuestionIndex])
  });
  */
  
  
  
  
  
  
  
  
  
  