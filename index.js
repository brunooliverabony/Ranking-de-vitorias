// Função para calcular o desempenho
function calcLevel(wins, defeats) {
    return wins - defeats;
}

// Função para determinar o nível com base no desempenho
function heroiNivel(performance) {
    if (performance <= 10) {
        return "Ferro";
    } else if (performance >= 11 && performance < 20) {
        return "Bronze";
    } else if (performance >= 21 && performance < 50) {
        return "Prata";
    } else if (performance >= 51 && performance < 80) {
        return "Ouro";
    } else if (performance >= 81 && performance < 90) {
        return "Diamante";
    } else if (performance >= 91 && performance < 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Definindo variáveis
let nameHeroi = "Bruno DEV ";
let wins = 19;
let defeats = 10;

// Calculando o desempenho e determinando o nível
let performance = calcLevel(wins, defeats);
let level = heroiNivel(performance);

// Exibindo a mensagem de saída no console
console.log("O Heroi", nameHeroi, "tem saldo de", performance, "e está no nível", level);