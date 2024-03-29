//Create all variables needed
let f2lSpeed = 0;
let ollSpeed = 0;
let pllSpeed = 0;
let solveSpeed = 0;

let f2lpct = 0.573;
let ollpct = 0.1718;
let pllpct = 0.2552;

let f2lGoal = 0;
let ollGoal = 0;
let pllGoal = 0;

let improveF2l = 0;
let improveOll = 0;
let improvePll = 0;

let stepToImprove = ' ';
let improvementText = ' ';

function improvementGuide(){


  //Set all needed variables
  f2lSpeed = document.getElementById('f2l-input').value;
  ollSpeed = document.getElementById('oll-input').value;
  pllSpeed = document.getElementById('pll-input').value;
  solveSpeed = parseFloat(f2lSpeed)+parseFloat(ollSpeed)+parseFloat(pllSpeed);
  f2lGoal = solveSpeed*f2lpct;
  ollGoal = solveSpeed*ollpct;
  pllGoal = solveSpeed*pllpct;

  //Find out how much each step needs to improve
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

  //Find out step with most needed improvement
  if(improveF2l<improveOll && improveF2l<improvePll){
    stepToImprove = "F2L";
  } else if(improveOll<improveF2l && improveOll<improvePll){
    stepToImprove = "OLL";
  } else if(improvePll<improveF2l && improvePll<improveOll){
    stepToImprove = "PLL";
  } else{
    stepToImprove = "F2L";
  }

  //Genererate all needed texts for improvement
  if (solveSpeed>59.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. At your speed, you just have to do a ton of solves to improve your F2L speed. Don't forget to have fun with it!</p>`
  } else if (solveSpeed>59.99 && stepToImprove=="OLL") {
    improvementText = `<p> Your worst step is OLL. At your speed, you just have to do a ton of solves to improve your OLL speed. Don't forget to have fun with it!</p>`
  } else if (solveSpeed>59.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. At your speed, you just have to do a ton of solves to improve your PLL speed. Don't forget to have fun with it!</p>`
  }

  //Display information
  document.getElementById('improve-f2l-by').innerHTML = f2lGoal.toFixed(2);
  document.getElementById('improve-oll-by').innerHTML = ollGoal.toFixed(2);
  document.getElementById('improve-pll-by').innerHTML = pllGoal.toFixed(2);
  document.getElementById('step-to-improve').innerHTML = improvementText;
}
