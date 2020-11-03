/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

function createElemntHTML () {
  var h1 = document.createElement('h1');
  h1.id = 'color';
  h1.style.textAlign = 'center';
  var button = document.createElement('button');
  button.onclick = function () {
    location.reload()
  }
  button.innerHTML = 'ИЗМЕНИТЬ ЦВЕТ';
  document.body.appendChild(h1);
  document.body.appendChild(button);
  

}

createElemntHTML();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var r = getRandomIntInclusive(16, 255);
var g = getRandomIntInclusive(16, 255);
var b = getRandomIntInclusive(16, 255);


function convertToRgb (a, b, c) {
  var convert1 = a.toString(16);
  var convert2 = b.toString(16);
  var convert3 = c.toString(16);
  return '#' + convert1 + convert2 + convert3;
} 

function changeColorBg() {
  var body = document.body.style.backgroundColor = convertToRgb(r, g, b);
  
}
changeColorBg();

function currentColorInfo (arg) {
  var elem = document.getElementById('color');
  elem.innerHTML = 'Случайный цвет: ' + arg;  
}

currentColorInfo(convertToRgb(r, g, b));


