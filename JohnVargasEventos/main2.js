// calculadora de masa corporal IMC = peso / altura * altura.
let boton = document.getElementById("calcular");

boton.addEventListener("click", (a) => {
  document.getElementById("resultado").value = (
    document.getElementById("peso").value /
    Math.pow(document.getElementById("altura").value * 0.01, 2)
  ).toFixed(1);

  console.log(resultado.value);
});

//Ejercicio 4
let dolarAPeso = document.getElementById("dolar");
let pesoADolar = document.getElementById("pesos");

function convertirDolarAPeso() {
  const dolar = document.getElementById("dolar").value;
  const valorDolar = document.getElementById("conversionDolar").value;

  const peso = dolar * valorDolar;

  document.getElementById("pesos").value = peso.toFixed(2);
}

function convertirPesoADolar() {
  const peso = document.getElementById("pesos").value;
  const conversionPeso = document.getElementById("conversionPeso").value;

  const dolar = peso * conversionPeso;

  document.getElementById("dolar").value = dolar.toFixed(2);
}

dolarAPeso.addEventListener("input", convertirDolarAPeso);
pesoADolar.addEventListener("input", convertirPesoADolar);
