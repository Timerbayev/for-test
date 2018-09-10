const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

(player == 0 && computer == 1) ? console.log('player win') : 
(player == 0 && computer == 2) ? console.log('computer win') : 
(player == 1 && computer == 2) ? console.log('player win') :
(computer == 0 && player == 1) ? console.log('computer win') :
(computer == 0 && player == 2) ? console.log('player win') : 
(computer == 1 && player == 2) ? console.log('computer win'):
 console.log('None win');



// опишем все условия и будем выводить в консоль 'computer win' или 'player win'