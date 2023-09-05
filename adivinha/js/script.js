const jogoAdivinha = {
  semente: 50,
  tentativa: 0,
  numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.semente);
  },
};



const btnVerifica = document.getElementById("btnVerifica");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");
const nome = document.getElementById("nome")

let numeroSorteado = jogoAdivinha.numeroSorteado();
console.log(numeroSorteado)

function atualizarTentativa(tentativa, valor) {
  if (valor <= 1) {
    tentativa.innerHTML =
      'Tentativa : <span style="color: white">' + valor + "</span>";
  } else {
    tentativa.innerHTML =
    'Tentativas : <span style="color: white">' + valor + "</span>";
  }
}

function reiniciar() {
  btnVerifica.innerText = "Verificar";
  tentativa.innerHTML = "Tentativa :  0";
  status.innerHTML = "Adivinhe o número sorteado"
  chute.disabled = false;
  chute.value = "";
  jogoAdivinha.tentativa = 0;
  numeroSorteado = jogoAdivinha.numeroSorteado();
  btnVerifica.removeEventListener("click", reiniciar);
}

const formAdivinha = document.getElementById("form");

formAdivinha.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML = '<span style="color: white ">Digite algum valor</span>';
    return;
  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

  if (numeroSorteado == chute.value) {
    status.innerHTML =
      '<span style="color: green">Acertou ' + nome.value +'!</span>';
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
  } else if (numeroSorteado > chute.value) {
    status.innerText = "O número sorteado é maior";
  } else if (numeroSorteado < chute.value) {
    status.innerText = "O número sorteado é menor";
  }
  
  if(jogoAdivinha.tentativa == 5 && chute.value != numeroSorteado){
    btnVerifica.addEventListener("click", reiniciar);
    status.innerHTML =
    '<span style="color: red">Você errou ' + nome.value +'!</span>';
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";

  }


});
