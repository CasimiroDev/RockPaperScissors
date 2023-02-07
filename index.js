const result = document.getElementById('Result')
const points = {
    player: document.getElementById('player-score'),
    cpu: document.getElementById('cpu-score')
}
const escolhas = ['PAPEL', 'PEDRA', 'TESOURA']
var text = "";
var [player_points, cpu_points] = [0,0]

function gerarEscolha(){
    const escolha_player = parseInt(document.querySelector('input[name="player_option"]:checked').value)
    const cpu = Math.floor(Math.random() * 3)
    const escolha_cpu = cpu * -1

    if(escolha_player + escolha_cpu == 0){
        text = "<span id='Result-content'>Você empatou!</span>"
    }
    else if (escolha_player + escolha_cpu == 1 || escolha_player + escolha_cpu == -2){
        text = "<span id='Result-content'>Você perdeu!</span>"
        cpu_points += 1
        points.cpu.innerHTML = "Computador: " + cpu_points
    }
    else {
        text = "<span id='Result-content'>Você venceu!</span>"
        player_points += 1
        points.player.innerHTML = "Player: " + player_points
    }
    result.innerHTML = text + `<br>Sua escolha: <strong>${escolhas[escolha_player]}</strong><br>Escolha da CPU: <strong>${escolhas[cpu]}</strong>`
}