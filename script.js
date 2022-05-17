var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Você acertou! Eu estava pensando no número " + numeroSecreto;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Sem chance, preciso de um número de 0 a 10";
  } else if (chute !== numeroSecreto && numeroSecreto > chute) {
    elementoResultado.innerHTML = "Hmmm... Tente um número maior";
  } else if (chute !== numeroSecreto && numeroSecreto < chute) {
    elementoResultado.innerHTML = "Talvez um número menor";
  }
}