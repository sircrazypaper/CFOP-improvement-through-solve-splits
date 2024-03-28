
let f2lSpeed = 0;
let ollSpeed = 0;
let pllSpeed = 0;
let solveSpeed = 0;

let f2lpct = 0.5735;
let ollpct = 0.1721;
let pllpct = 0.2544;

let f2lGoal = 0;
let ollGoal = 0;
let pllGoal = 0;

let improveF2l = 0;
let improveOll = 0;
let improvePll = 0;

let stepToImprove = " ";

function improvementGuide(){

  f2lSpeed = document.getElementById('f2l-input').value;
  ollSpeed = document.getElementById('oll-input').value;
  pllSpeed = document.getElementById('pll-input').value;
  solveSpeed = parseFloat(f2lSpeed)+parseFloat(ollSpeed)+parseFloat(pllSpeed);
  f2lGoal = solveSpeed*f2lpct;
  ollGoal = solveSpeed*ollpct;
  pllGoal = solveSpeed*pllpct;

  improveF2l = f2lGoal-f2lSpeed;
  if(improveF2l>0){
    improveF2l = 0
  }
  improveOll = ollGoal-ollSpeed;
  if(improveOll>0){
    improveOll = 0
  }
  improvePll = pllGoal-pllSpeed;
  if(improvePll>0){
    improvePll = 0
  }

  if(improveF2l<improveOll && improveF2l<improvePll){
    stepToImprove = "F2L";
  }
  if(improveOll<improveF2l && improveOll<improvePll){
    stepToImprove = "OLL";
  }
  if(improvePll<improveF2l && improvePll<improveOll){
    stepToImprove = "PLL";
  }



  alert(stepToImprove);

  document.getElementById('improve-f2l-by').innerHTML = improveF2l;
  document.getElementById('improve-oll-by').innerHTML = improveOll;
  document.getElementById('improve-pll-by').innerHTML = improvePll;
}
