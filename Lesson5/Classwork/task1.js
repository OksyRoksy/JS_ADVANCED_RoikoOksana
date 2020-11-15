/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
var Train = {
    name: 'Hyundai',
    speed: 150,
    passengers: 100,
    drive: function(){
        console.log(' Поезд', this.name, 'везет', this.passengers, 'со скоростью', this.speed)
    },
    stay: function(){
        console.log(' Поезд', this.name, 'остановился. Скорость ', this.speed)
    },
    pickUp: function(count){
        this.passengers += Number(count);
		console.log(this.passengers);
    },
};
Train.drive();
Train.stay();



        
    

