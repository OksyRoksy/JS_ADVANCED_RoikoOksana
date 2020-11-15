
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
var buttonContainer = document.getElementById('buttonContainer');
var tabContainer = document.getElementById('tabContainer');
var tabs = tabContainer.querySelectorAll('.tab');

buttonContainer.querySelectorAll('.showButton').forEach(function (item) {
    var dataId = item.dataset.tab;
    item.addEventListener('click', function () {
        tabs.forEach(function (tab) {
            // console.log(tab);
            let tabId = tab.dataset.tab;
            console.log(tabId);
            if (tabId == dataId) {
                tab.classList.add('active');

            } else{
                tab.classList.remove('active');
            }
        });
    });
});