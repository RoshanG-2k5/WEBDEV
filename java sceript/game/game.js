let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

const gencompchoice =() =>{
  const options = ["rock","paper","scissors"];
 const randixd= Math.floor(Math.random() *3);
  return options[randixd];
};
const drawgame =() => {
   msg.innerText = "game was draw play again!.";
    msg.style.backgroundColor = "#102033ff";
};
const showwinner = (userwin,userchoice,compchoice) => {
 if (userwin){
  userscore++;
  userscorepara.innerText = userscore;
  msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
   msg.style.backgroundColor = "green";
 }else {
  compscore++
  compscorepara.innerText = compscore;
   msg.innerText =  `you lost. ${compchoice} beats your ${userchoice}`;
   msg.style.backgroundColor = "red";
 }
};
const playgame =(userchoice) => {
 const compchoice = gencompchoice();

 if(userchoice === compchoice){
  drawgame();
 }else{
  let userwin = true;
  if(userchoice==="rock"){
    userwin=compchoice === "paper" ? false : true;
  }else if(userchoice === "papaer"){
    userwin=compchoice === "scissors" ? false : true;
  } else {
    userwin = compchoice === "rock" ? false : true;
  }
  showwinner(userwin, userchoice,compchoice);
 }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
