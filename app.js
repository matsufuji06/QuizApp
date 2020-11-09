const question = "マイケル・スコフィールドの名言は？ ";
const answers = [
  "お肉食べたい", 
  "信じることだ", 
  "脱獄無理ゲーwww", 
  "展開だらだらしすぎ"
];

const correct = "信じることだ";
const $button = document.getElementsByTagName("button");

// クイズの問題文と答えの選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  };
}

setupQuiz();



$button[0].addEventListener("click", (e)=>{
  if( correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[1].addEventListener("click", (e)=>{
  if( correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[2].addEventListener("click", (e)=>{
  if( correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[3].addEventListener("click", (e)=>{
  if( correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});