const question = "マイケル・スコフィールドの名言は？ ";
const answers = ["お肉食べたい", "信じることだ", "脱獄無理ゲーwww", "展開だらだらしすぎ"];
const correct = "信じることだ";

document.getElementById("js-question").textContent = question;

document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
  if( correct === document.getElementsByTagName("button")[0].textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});