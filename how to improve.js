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

  //Make sure all information has been given
  if(f2lSpeed==""||ollSpeed==""||pllSpeed==""){
    alert("Please fill in your speed for F2L, OLL and PLL");
  }

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
    improvementText = `<p>To improve your solves you need to work on your cross solutions, if you are currently solving the cross by making a daisy and then after that making the cross. Instead what you should do is just make the cross without the daisy. It is a little hard at first, but I am sure you can figure it out. Once you have learnt how to make the cross without the daisy you just have to do a ton of solves to practice it.</p>`;
  } else if (solveSpeed>59.99 && stepToImprove=="OLL") {
    improvementText = `<p>The easiest way for you to improve is just to do as many solves as possible, because you are at a stage where to get faster all you need to do is get more used to solving the cube. For you it is not really necessary to learn any fancy algorithms and instead you should just focus on getting a lot of solves done.</p>`;
  } else if (solveSpeed>59.99 && stepToImprove=="PLL"){
    improvementText = `<p>The easiest way for you to improve is just to do as many solves as possible, because you are at a stage where to get faster all you need to do is get more used to solving the cube. For you it is not really necessary to learn any fancy algorithms and instead you should just focus on getting a lot of solves done.</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="F2L"){
    improvementText = `<p>For you there are 2 main ways to improve your F2L. The first and most important is solving the cross more efficiently,  <a href=”https://www.youtube.com/watch?v=Us-NjxTbay8”>this video </a> will help you with that. The second thing to do is learning how to do intuitive F2L, here is an <a href=”https://www.youtube.com/watch?v=Ar_Zit1VLG0“>easy tutorial</a>. Once you are solving your cross more efficiently and have learnt intuitive F2L, all you need to do is do as many solves as possible to get used to these new concepts.</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="OLL"){
    improvementText = `<p>The easiest way for you to improve is just to do as many solves as possible, because you are at a stage where to get faster all you need to do is get more used to solving the cube. For you it is not really necessary to learn any fancy algorithms and instead you should just focus on getting a lot of solves done.</p>`;
  } else if (solveSpeed>49.99 && solveSpeed<59.99 && stepToImprove=="PLL"){
    improvementText = `<p>My biggest tip for improving your PLL is to learn 2-look PLL. 2-look PLL is essential for your improvement because you are now beginning to reach a stage where knowing some algorithms is actually a big help. To learn 2-look PLL I would use <a href=”https://www.youtube.com/watch?v=ZC9nwou59ow”>this tutorial</a>, because it is really easy and nicely laid out. When you have learnt 2-look PLL all you need to do is to solve the cube as much as possible, so you can get used to this new technique.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="F2L"){
    improvementText = `<p>There are 2 main ways for you to get faster at F2L, the first one is to solve your cross on the bottom instead of the top. That is important because you save about 0.5-1 whole seconds by removing that huge rotation after the cross. And the second important thing is to know intuitive F2L. Intuitive F2L is important because it makes your F2L ~2x faster than if you used the basic beginners method. Here is a link for improving at <a href=”https://www.youtube.com/watch?v=Us-NjxTbay8”>cross</a>. And here is one for improving at <a href=”https://www.youtube.com/watch?v=Ar_Zit1VLG0”>F2L</a>. When you have started to solve your cross on the bottom and are using intuitive F2L, all you have to do is solve, solve, solve and solve some more, so you can get used to these new techniques.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="OLL"){
    improvementText = `<p>You are now at a speed where 2-look OLL is essential for your improvement, 2-look OLL is important because it will reduce you OLL movecount by more than 7 moves on average! To learn 2-look OLL i would advise you to watch this <a href=”https://www.youtube.com/watch?v=6PSBaxlBqRg”>tutorial</a>, because it is simple and easy to follow. When you are done learning 2-look OLL you just need to do as many solves as possible to get the new algorithms into your muscle memory.</p>`;
  } else if (solveSpeed>39.99 && solveSpeed<49.99 && stepToImprove=="PLL"){
    improvementText = `<p>To improve your PLL it is very important that you know 2-look PLL, here is a <a href=”https://www.youtube.com/watch?v=ZC9nwou59ow”>tutorial</a>, in case you don’t know it yet. But if you do know 2-look PLL then all you have to do, is do a ton of solves to get the algorithms into your muscle memory.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="F2L"){
    improvementText = `<p>Make sure you are solving your cross on the bottom, and solving it in less than 9 moves. If you can't solve it in less than 9 moves, here is a <a href=”https://www.youtube.com/watch?v=VWwj_HaPpYI”>tutorial</a> that I highly recommend you watch. To practice solving the cross in less than 9 moves I would recommend you go on a timer, like <a href=”https://cstimer.net/”>CS-timer</a> and try the same scramble again and again, until you have solved the cross in less than 9 moves. Another thing that is vital for your improvement is having good fingertricks. Fingertricks are important because they are the base of your solve, here is a <a href=”https://www.youtube.com/watch?v=wLuVF9Dk3AQ”>quick tutorial</a>.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="OLL"){
    improvementText = `<p>Make sure that you are comfortable with 2-look OLL, if you are not, just watch this <a href=”https://www.youtube.com/watch?v=6PSBaxlBqRg”>tutorial</a>. When you are finished learning 2-look OLL, simply do as many solves as possible to get the algorithms into your muscle memory.</p>`;
  } else if (solveSpeed>29.99 && solveSpeed<39.99 && stepToImprove=="PLL"){
    improvementText = `<p>Now is the time for you to learn full PLL, 21 algorithms might seem daunting at first, but luckily it isn’t actually that hard to learn once you get started. I would recommend learning your PLL algorithms from this <a href=”https://www.speedcubedb.com/a/3x3/PLL”>algorithm sheet</a>, because it has the best algorithms for each case. When you are done learning full PLL you need to do a lot of solves to get used to all of the algorithms.</p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="F2L"){
    improvementText = `<p>You have gotten to a speed where efficiency in F2L is starting to become a more important thing. By efficiency I don’t mean learning fancy algorithms, multislotting or pseudoslotting, but I mean solving your pairs intuitively but in a smarter way. To do so you should watch this <a href=”https://www.youtube.com/watch?v=JebXf1uYYwU”>video</a>, it explains amazing solutions for every type of pair, so you can understand what it does and how it works. Once you are sure that you are solving all of your pairs in a good way, i would advise you to do a lot of slow solves(untimed solves where you focus on a specific thing) focusing on using and understanding your new solutions for F2L pairs</p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="OLL"){
    improvementText = `<p>Now it is time for you to learn full OLL. Full OLL can seem like a daunting task because there are 57 algorithms, but in reality they are all very short and fairly simple. With a bit of hard work I am sure that you will learn full OLL very quickly. I think you should learn the algorithms from this <a href=”https://speedcubedb.com/a/3x3/OLL”>algorithm sheet</a>, and to practice the algorithms you can use this <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a>. If you have never tried an algorithm trainer before, then all you have to know is that you need to select the cases you already know, and then press “train”, it is that easy!</p>`;
  } else if (solveSpeed>19.99 && solveSpeed<29.99 && stepToImprove=="PLL"){
    improvementText = `<p>You need to be sure that you know full PLL, and that you have good fingertricks for every case. If you need help coming up with fingertricks you can use <a href=”https://www.youtube.com/watch?v=9r_HqG4zSbk”>this tutorial</a>, <a href=”https://www.youtube.com/watch?v=HWIQdX8vHcE&t=6s”>this tutorial</a> or <a href=”https://www.youtube.com/watch?v=6NU6jZNDLcY”>this tutorial</a>. When you are sure that you have good fingertricks, you should use this <a href=”https://bestsiteever.ru/pll/”>algorithm trainer</a>, to train your PLL’s.</p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="F2L"){
    improvementText = `<p>It is very very important that you solve your F2L cases as efficiently as possible, if you need help with that you can watch this <a href=”https://www.youtube.com/watch?v=JebXf1uYYwU”>tutorial</a>. It is also important that you can plan your whole cross in inspection, and solve it in less than 9 moves. If you need help with getting more efficient at cross you can watch this <a href=”https://www.youtube.com/watch?v=VWwj_HaPpY”>tutorial</a>. Another important thing for you to do is untimed solves, in those untimed solves you need to focus on solving your F2L efficiently and planning your whole cross. If you want to try something really fancy, you can start using lookahead, but it is not 100% vital for your speed.</p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="OLL"){
    improvementText = `<p>At this speed you should know full OLL, if you don’t you can look at this <a href=”https://speedcubedb.com/a/3x3/OLL”>algorithm sheet</a> to learn the algorithms. When you are done learning all of the algorithms you need to drill them on this <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a>. You will need to drill them a lot to get fast at recognizing and executing them.</p>`;
  } else if (solveSpeed>14.99 && solveSpeed<19.99 && stepToImprove=="PLL"){
    improvementText = `<p>Improving at PLL is a very very simple thing to do. I would recommend drilling all of your algorithms as much as you can. I would recommend using this <a href=”https://bestsiteever.ru/pll/”>algorithm trainer</a>, to practice the algorithms. </p>`;
  } else if (solveSpeed>11.99 && solveSpeed<14.99 && stepToImprove=="F2L"){
    improvementText = `<p>Now it is not only your efficiency that decides how fast your F2L is, efficiency is still important though, but now lookahead is also a key factor in your speed. Lookahead is basically just not looking at the pieces you are solving, hence the name look-ahead. Here is a <a href=”https://www.youtube.com/watch?v=Sw3DpueJsWM”>tutorial</a> that goes over all of the main principles of lookahead. One important thing to note is that lookahead is not easy to get used to, so don’t expect it to be easy. To practice lookahead I would advise you to do some untimed solves where you really focus on not having any pauses in your F2L.</p>`;
  } else if (solveSpeed>11.99 && solveSpeed<14.99 && stepToImprove=="OLL"){
    improvementText = `<p>Make sure you know full OLL, if you don’t you can look at this <a href=”https://speedcubedb.com/a/3x3/OLL”>algorithm sheet</a> to learn the algorithms. It is also very important that you have good fingertricks for all of the cases.To come up with good fingertricks you can watch this <a href=”https://www.youtube.com/watch?v=47JfJxU7EjM”>video</a>, this <a href =”https://www.youtube.com/playlist?list=PLdR4dU8IUTixFfXB5K4_Zd4eTzzbhzzXJ”>video series</a> or this <a href=”https://www.youtube.com/watch?v=FPqqkGUjFE0”>video</a>. Once you have good fingertricks you just need to use an <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a> to practice them.</p>`;
  } else if (solveSpeed>11.99 && solveSpeed<14.99 && stepToImprove=="PLL"){
    improvementText = `<p>To improve your PLL you should learn 2-sided PLL recognition. 2-sided PLL recognition will improve your recognition time by a lot, because as the name suggests you only need to look at 2 sides to find out what PLL it is. To learn it I suggest watching this <a href="https://www.youtube.com/watch?v=R-GIYWviITc&t=203s">easy tutorial</a>. To practice your new recognition system you can either just use a normal <a href=”https://bestsiteever.ru/pll/”>algorithm trainer</a>, and then focus on using your new recognition system. Or you can use this <a href=”https://bestsiteever.ru/pll_recognition/#/”>website</a> to practice only the recognition system.</p>`;
  } else if (solveSpeed>8.99 && solveSpeed<11.99 && stepToImprove=="F2L"){
    improvementText = `<p>For you to improve at F2L there are 2 main things you have to do. The first one is to make sure that you have good lookahead, to find out if you have good lookahead i would recommend filming some of your solves and then watching them to see if your lookahead is good or not. If it is not that good you just need to do some slow solves to improve it. Once you are done improving your lookahead you should learn how to plan you first pair in inspection, I reccomend you watch this <a href=””>tutorial</a>, and to practice it I recommend this <a href="https://christianvaughn.net/C2F2L/#">trainer</a>. Another extra thing you can learn is keyhole, keyhole can make planning your first pair a lot easier, and you can also use it in F2L to make some bad cases good, here is a <a href=”https://www.youtube.com/watch?v=TWffMVBqj1w”>quick tutorial</a>.</p>`;
  } else if (solveSpeed>8.99 && solveSpeed<11.99 && stepToImprove=="OLL"){
    improvementText = `<p>Make sure you know full OLL, if you don’t you can look at this <a href=”https://speedcubedb.com/a/3x3/OLL”>algorithm sheet</a> to learn the algorithms. It is also very important that you have good fingertricks for all of the cases.To come up with good fingertricks you can watch this <a href=”https://www.youtube.com/watch?v=47JfJxU7EjM”>video</a>, this<a href =”https://www.youtube.com/playlist?list=PLdR4dU8IUTixFfXB5K4_Zd4eTzzbhzzXJ”>video series</a> or this <a href=”https://www.youtube.com/watch?v=FPqqkGUjFE0”>video</a>. Once you have good fingertricks you just need to use an <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a> to practice them.</p>`;
  } else if (solveSpeed>8.99 && solveSpeed<11.99 && stepToImprove=="PLL"){
    improvementText = `<p>Make sure that you have good fingertricks for all of your PLL algorithms, it is best that you come up with them yourself so they suit your turning style, but if you are having trouble you can watch <a href=”https://www.youtube.com/watch?v=9r_HqG4zSbk”>this tutorial</a>, <a href=”https://www.youtube.com/watch?v=HWIQdX8vHcE&t=6s”>this tutorial</a> or <a href=”https://www.youtube.com/watch?v=6NU6jZNDLcY”>this tutorial</a>. Another thing that is important to know is 2-sided PLL recognition, you can watch this <a href="https://www.youtube.com/watch?v=R-GIYWviITc&t=203s">easy tutorial</a> to learn it. To practice your PLL recognition you should use this <a href=”https://bestsiteever.ru/pll_recognition/#/”>trainer</a>, and to practice execution you should use this <a href=”https://bestsiteever.ru/pll/”>trainer</a>. </p>`;
  } else if (solveSpeed>7.99 && solveSpeed<8.99 && stepToImprove=="F2L"){
    improvementText = `<p>To have good F2L there are three main steps, the first one is efficiency, the second one is lookahead and the third is turn speed. It is your job to find out which of the three you need to improve the most. To improve efficiency you have to make sure you are solving every pair in a good way. Another thing you can do is learn some advanced techniques like pseudoslotting, multislotting and FRUF stuff. To improve your lookahead you just need to do slow solves where you focus on lookahead. And to improve turn speed all you need is good fingertricks and good lookahead. </p>`;
  } else if (solveSpeed>7.99 && solveSpeed<8.99 && stepToImprove=="OLL"){
    improvementText = `<p>To improve OLL you just need to train the algorithms with an <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a>. Practicing with an algorithm trainer will improve your recognition and execution. You can also consider learning some advanced algorithms like <a href=”https://speedcubedb.com/a/3x3/ZBLL”>ZBLL</a>, <a href=”https://speedcubedb.com/a/3x3/OLLCP”>OLLCP</a> and <a href=”https://speedcubedb.com/a/3x3/VLS”>VLS</a>.</p>`;
  } else if (solveSpeed>0 && solveSpeed<8.99 && stepToImprove=="PLL"){
    improvementText = `<p>To improve at PLL all you have to do is practice recognition and execution. To practice recognition I advise you to use this <a href=”https://bestsiteever.ru/pll_recognition/#/”>trainer</a>, and to improve execution I advise you to use this <a href=”https://bestsiteever.ru/pll/”>trainer</a>. You can consider predicting PLL or just the corner permutation when you are at OLL.  Another thing you can consider is learning some <a href=”https://speedcubedb.com/a/3x3/ZBLL”>ZBLL</a> or <a href=”https://speedcubedb.com/a/3x3/OLLCP”>OLLCP</a>. </p>`;
  } else if (solveSpeed>0 && solveSpeed<7.99 && stepToImprove=="F2L"){
    improvementText = `<p>To be good at F2L you should plan as much as possible in inspection, have amazing lookahead and solve pairs as efficiently as possible. You can also look into some advanced F2L techniques like pseudoslotting, multislotting and FRUF stuff.</p>`;
  } else if (solveSpeed>0 && solveSpeed<7.99 && stepToImprove=="OLL"){
    improvementText = `<p>You just need to use an <a href=”https://bestsiteever.ru/oll/”>algorithm trainer</a> to get better at recognition and execution. Another thing you can do is learn some advanced algorithms like <a href=”https://speedcubedb.com/a/3x3/ZBLL”>ZBLL</a>, <a href=”https://speedcubedb.com/a/3x3/OLLCP”>OLLCP</a> and <a href=”https://speedcubedb.com/a/3x3/VLS”>VLS</a>.</p>`;
  }

  //Display information
  document.getElementById('improve-f2l-by').innerHTML = f2lGoal.toFixed(2);
  document.getElementById('improve-oll-by').innerHTML = ollGoal.toFixed(2);
  document.getElementById('improve-pll-by').innerHTML = pllGoal.toFixed(2);
  document.getElementById('step-to-improve').innerHTML = improvementText;
}
