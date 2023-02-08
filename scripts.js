// Quero que o usuário insira um numero
// Quero que esse número seja calculado

let inputGraus = document.getElementById('graus');
let inputF = document.getElementById('fahrenheit');

let resultadoGraus = document.getElementById('resultado-graus');
let resultadoF = document.getElementById('resultado-fahrenheit');

function calcularGraus() {
  console.log('Calculando...');

  let graus = inputGraus.value;
  let convgraus = graus * 1.8 + 32;
  resultadoGraus.innerHTML = `<p>Sua temperatura em Fahrenheit é: 
  
  ${convgraus.toFixed(2)}</p>`;
}

function calcularFahrenheit() {
  console.log('Calculando...');

  let f = inputF.value;
  let convf = (f - 32) / 1.8;
  resultadoF.innerHTML = `<p>Sua temperatura em Graus é: 
  
  ${convf.toFixed(2)}</p>`;
}
