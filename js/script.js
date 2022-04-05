//guess counter/guess number game=> increase and decrease button

/*
Guess number app
The user choose a number 
if the guess is exact he earn 10 points, if not he decrease one point
The game end either by winning when u get 100 or more point or 
the game ends when you go under 0 
winning message display

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");
}

document.getElementById('counter').innerHTML='10';
*/



let win=()=>{
  console.log('tayari')
}
let lost=()=>{
  console.log('taha vyanse')
}
let random=0;
document.getElementById('rnum').innerHTML=random;
let counter=0,ynum=0,points=10;
document.getElementById('counter').innerHTML=counter;
document.getElementById('ynum').innerHTML=ynum;
document.getElementById('points').innerHTML=points;

let increase=()=>{
  counter++;
  document.getElementById('counter').innerHTML=counter;
}

let decrease=()=>{
  
  if(counter>=1){
    counter-=1;
  }
  document.getElementById('counter').innerHTML=counter;
}

let guess=()=>{
  random=Math.floor(Math.random()*11);
  document.getElementById('rnum').innerText=random;
  document.getElementById('ynum').innerHTML=counter;
  console.log(random);
  if(counter==random){
    points+=10;
    document.getElementById('points').innerHTML=points;
    if(points>=100){
      win();
      document.getElementById("game").classList.add("undisplay");
      document.getElementById("body").classList.add("win");
      document.getElementById("win").classList.remove("undisplay");
    }
  }else{
    console.log('Oups');
    points-=1;
    document.getElementById('points').innerHTML=points;
     if(points<1){
      lost();
      document.getElementById("game").classList.add("undisplay");
      document.getElementById("body").classList.add("loose");
      document.getElementById("loose").classList.remove("undisplay");
    }
  }
  

  counter=0;
  document.getElementById('counter').innerHTML=counter;
}

//get random number


