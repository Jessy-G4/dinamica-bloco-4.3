let jogadorDois = "folha";
let jogadorUm = "tesoura";


if (jogadorUm === jogadorDois) {
    console.log('Empate');
} else if (jogadorUm === 'pedra' && jogadorDois === 'tesoura') {
    console.log('Jogador 1 vence');
} else if (jogadorUm === 'pedra' && jogadorDois === 'folha') {
    console.log('Jogador 2 vence');
} else if (jogadorUm === 'tesoura' && jogadorDois === 'folha') {
    console.log('Jogador 1 vence');
} else if (jogadorUm === 'tesoura' && jogadorDois === 'pedra') {
    console.log('Jogador 2 vence');
} else if (jogadorUm === 'folha' && jogadorDois === 'tesoura') {
    console.log('Jogador 2 vence');
} else if (jogadorUm === 'folha' && jogadorDois === 'pedra') {
    console.log('Jogador 1 vence');
}

