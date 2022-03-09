/* 1. Faça um algoritmo que calcule a soma de 50 a 
* 100 usando a estrutura “for” e retorne no formato:
* A soma de 50 a 100 é: X
* Feito pelo aluno Gabriel Oliveira Aires
*/

function sum () {
  let soma = 0;
  for (let index = 1; index <= 100; index += 1){
    soma = soma + index; 
  } console.log(soma)
}
sum();


/* 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
 * Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
 */

let contador = 0;

for (i = 0; i < 125; i++){
    if (i % 3 == 0){
        contador += 1;
    }
} console.log(contador);

