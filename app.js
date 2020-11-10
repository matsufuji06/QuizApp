const quiz = [

  {
    question: "マイケル・スコフィールドの名言は？",
    answers: [
      "お肉食べたい", 
      "信じることだ", 
      "脱獄無理ゲー", 
      "展開だらだらしすぎ"
    ],
    correct: "信じることだ"
  }, {
    question: "ソリッド・スネークの名言は？",
    answers: [
      "大佐あああああ！", 
      "麻酔銃で寝たい", 
      "潜入無理ゲー", 
      "性欲を持て余す..."
    ],
    correct: "性欲を持て余す..."
  }, {
    question: "イチローが絶対に言わないことは？",
    answers: [
      "喝！！", 
      "ホークスにいきたい", 
      "焼きそばUFO食べたい", 
      "酒だ、酒！！"
    ],
    correct: "喝！！"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length

// クイズの問題文と答えの選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  };
}

setupQuiz();

const clickHandler = (e) => {
  if( quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
  
  quizIndex++;
  
  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
    
  } else {
    // 問題数がなければこちらを実行
    window.alert("終了！");
  }
  
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}