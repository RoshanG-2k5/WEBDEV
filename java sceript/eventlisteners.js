btn1.addEventListener("click", () =>{
  console.log("btn was cick 1");
});

btn1.addEventListener("click", () =>{
  console.log("btn was cick 2 ");
});
const handler3 = () =>
{
  console.log("btn was cick 3");};

btn1.addEventListener("click", () =>{
  console.log("btn was cick 4");
});

btn1.removeEventlistener("click",handler3);