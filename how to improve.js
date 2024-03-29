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
    improvementText = `<p> Your worst step is F2L. At your speed, you just have to do a ton of solves to improve your F2L speed. Don't forget to have fun with it!</p>`;
  } else if (solveSpeed>59.99 && stepToImprove=="OLL") {
    improvementText = `<p> Your worst step is OLL. At your speed, you just have to do a ton of solves to improve your OLL speed. Don't forget to have fun with it!</p>`;
  } else if (solveSpeed>59.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. At your speed, you just have to do a ton of solves to improve your PLL speed. Don't forget to have fun with it!</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. At your speed, you should make sure you know how to do intuitive F2L, you can use <a href="https://www.youtube.com/watch?v=Ar_Zit1VLG0">this tutorial</a> to learn it. If you already know how to do intuitive F2L then just do a ton of solves to practice it.</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="OLL"){
    improvementText = `<p> Your worst step is OLL. At your speed you just need to do a ton of solves to make your OLL faster. Remember to have fun though.</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. At your speed it is necessary to know 2 look PLL, you can use <a href="https://www.youtube.com/watch?v=ZC9nwou59ow">this tutorial</a> to learn it. If you already know 2 look PLL, just do a ton of solves to improve at it.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. To improve it, make sure you know intuitive F2L. If you already know how to do intuitive F2L then simply just do a ton of solves to improve at it.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="OLL"){
    improvementText = `<p> Your worst step is OLL. At your speed it is necessary to know 2 look OLL, you can use <a href="https://www.youtube.com/watch?v=6PSBaxlBqRg">this tutorial</a> to learn it. If you already know 2 look OLL, just do a ton of solves to improve at it.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. Make sure you know 2 look PLL, and then just do a ton of solves to improve your PLL speed.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. Make sure you know how to do intuitive F2L. You also need to have good fingertricks, here is a <a href="https://www.youtube.com/watch?v=wLuVF9Dk3AQ">fingertrick tutorial</a>. After you know all of that, just do a million solves.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="OLL"){
    improvementText = `<p> Your worst step is OLL. To improve at OLL at your speed, make sure you know 2 look OLL, if you already know it just do a lot of solves.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. At your speed you need to know full PLL here is an <a href="https://www.speedcubedb.com/a/3x3/PLL">algorithm sheet</a>. If you already know full PLL you just need to do a ton of solves to get faster at it.</p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. Now is the time for you to have a more efficient F2L, I don't mean learning advanced stuff like pseudoslotting, multislotting and FRUF stuff. I just mean solving your pairs intuitively, but in a smarter way, here is a quick <a href="https://www.youtube.com/watch?v=JebXf1uYYwU">video tutorial</a>. After you have watched this video I advise you to do some untimed solves where you focus on using the new ideas you have just learnt.</p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="OLL"){
    improvementText = `<p> Your worst step is OLL. You need to make sure you have good fingertricks for the cases you know. Once you are sure your fingertricks are good, you can use an algorithm trainer to practice the algorithms. <a href="https://bestsiteever.ru/oll/">This one</a> is my favorite. </p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. You need to make sure you know full PLL and have good fingertricks for all of the cases. Once you are sure your fingertricks are good, you can use an algorithm trainer to practice the algorithms. <a href="https://bestsiteever.ru/pll/">This one</a> is my favorite. </p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="F2L"){
    improvementText = `<p> Your worst step is F2L. Make sure you solve all of the cases fairly efficiently. After that just do some slow solves to get used to your solutions for every case.</p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="OLL"){
    improvementText = `<p> Your worst step is OLL. The time has come for you to learn full OLL. 57 algorithms is a lot, but don't let it discourage you. Here is an <a href="https://speedcubedb.com/a/3x3/OLL">algorithm sheet</a>. The best way to learn the algorithms is to learn them in sets based on their shapes. Example: learning the P shapes. When you are done learning them you should use an algorithm trainer to practice them.</p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="PLL"){
    improvementText = `<p> Your worst step is PLL. Improving your PLL is fairly simple, all you have to do is use an algorithm trainer to practice all the cases.</p>`;
  }

  //Display information
  document.getElementById('improve-f2l-by').innerHTML = f2lGoal.toFixed(2);
  document.getElementById('improve-oll-by').innerHTML = ollGoal.toFixed(2);
  document.getElementById('improve-pll-by').innerHTML = pllGoal.toFixed(2);
  document.getElementById('step-to-improve').innerHTML = improvementText;
}
