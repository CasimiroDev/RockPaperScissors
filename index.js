const result = document.getElementById('Result')
const escolhas = ['PAPEL', 'PEDRA', 'TESOURA']
var text = "";

function gerarEscolha(){
    const escolha_player = parseInt(document.querySelector('input[name="player_option"]:checked').value)
    const cpu = Math.floor(Math.random() * 3)
    const escolha_cpu = cpu * -1

    if(escolha_player + escolha_cpu == 0){
        text = "<span>Você empatou!</span>"
    }
    else if (escolha_player + escolha_cpu == 1 || escolha_player + escolha_cpu == -2){
        text = "<span>Você perdeu!</span>"
    }
    else {
        text = "<span>Você venceu!</span>"
    }
    result.innerHTML = text + `<br>Sua escolha: <strong>${escolhas[escolha_player]}</strong><br>Escolha da CPU: <strong>${escolhas[cpu]}</strong>`
}