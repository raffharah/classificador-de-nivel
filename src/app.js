//Variaveis de elo, com array limite de 15000 pontos maximos
let Ferro = [0, 1000];
let Bronze = [1001, 2000];
let Prata = [2001, 5000];
let Ouro = [5001, 7000];
let Platina = [7001, 8000];
let Ascendente = [8001, 9000];
let Imortal = [9001, 10000];
let Radiante = [10001, 15000];

//variavel para armazenar o valor elo do usuario
function confirma() {
    // Captura o valor do campo de entrada
    let rank = parseInt(document.FormPontos.f_ponto.value);

    // Condições para chamar o elo
    let elo = determinaRank(rank);

    // Exibe o resultado no HTML
    document.getElementById("resultado").innerHTML = `O jogador com ${rank} está na categoria ${elo}.`;
}

//condições para chamar o elo
function determinaRank(rank) {
    if (rank >= Ferro[0] && rank <= Ferro[1]) {
        return "Ferro";
    } else if (rank >= Bronze[0] && rank <= Bronze[1]) {
        return "Bronze";
    } else if (rank >= Prata[0] && rank <= Prata[1]) {
        return "Prata";
    } else if (rank >= Ouro[0] && rank <= Ouro[1]) {
        return "Ouro";
    } else if (rank >= Platina[0] && rank <= Platina[1]) {
        return "Platina";
    } else if (rank >= Ascendente[0] && rank <= Ascendente[1]) {
        return "Ascendente";
    } else if (rank >= Imortal[0] && rank <= Imortal[1]) {
        return "Imortal";
    } else if (rank >= Radiante[0] && rank <= Radiante[1]) {
        return "Radiante";
    } else {
        return "Categoria não encontrada";
    }
}

let elo = determinaRank(rank);

console.log("O jogador com " + rank + " está na categoria " + elo);