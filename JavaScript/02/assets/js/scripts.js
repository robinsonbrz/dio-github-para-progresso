
var atual = document.getElementById('currentNumber')
atual.innerHTML = '0'

document.getElementById("counter").addEventListener("click", redOrBlack);

function redOrBlack() {
    var valorAtual = parseInt(atual.innerHTML);
    if ((valorAtual < -4 ) || (valorAtual > 4 )){
        atual.style.color = 'red';
    } else {
        atual.style.color = 'black';
    }
}

function decrement(){
    valorAtual = parseInt(atual.innerHTML);
    if (valorAtual > -10){
        valorAtual -= 1;
        atual.innerHTML = valorAtual;
    }

}

function increment(){
    var valorAtual = parseInt(atual.innerHTML);
    if (valorAtual < 10){
        valorAtual += 1;
        atual.innerHTML = valorAtual;
    }
}



