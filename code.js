
let f2lSpeed = 0;
let ollSpeed = 0;
let pllSpeed = 0;
let solveSpeed = 0;

let f2lpct = 0.5735;
let ollpct = 0.1721;
let pllpct = 0.2544;


function alerts(){
  f2lSpeed = document.getElementById('f2l-input').value;
  ollSpeed = document.getElementById('oll-input').value;
  pllSpeed = document.getElementById('pll-input').value;
  solveSpeed = parseFloat(f2lSpeed)+parseFloat(ollSpeed)+parseFloat(pllSpeed);

  document.getElementById('solve-speed').innerHTML = solveSpeed;
}
