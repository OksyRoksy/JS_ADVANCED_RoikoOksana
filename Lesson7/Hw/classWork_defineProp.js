/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/
  class SuperDude {
    constructor(name, superpowers) {
			Object.defineProperty(this, "name", {
				configurable: false,
				enumerable: true,
				writable: false,
				value: name
			})
			superpowers.forEach(({ name, spell }) => {
				const bindedSpell = spell.bind(this);

				Object.defineProperty(this, name, {
				configurable: false,
				enumerable: true,
				writable: false,
				value: () => console.log(bindedSpell())
			})})
		}
	}
	
	class Spell {
		constructor(name, text) {
			this.name = name;
			this.spell = function() {
				return `${this.name} ${text}`
			};
		}
	}

	const Invisibility = new Spell("Invisibility", function() { return `${this.name} hide from you`});

	// superPowers before

  // let superPowers = [
  //   { name:'Invisibility', spell: function() { return `${this.name} hide from you` }},
  //   { name:'superSpeed', spell: function() { return `${this.name} running from you` }},
  //   { name:'superSight', spell: function() { return `${this.name} see you` }},
  //   { name:'superFroze', spell: function() { return `${this.name} will froze you` }},
  //   { name:'superSkin',  spell: function() { return `${this.name} skin is unbreakable` }},
	// ];

	// superPowers with class

	let superPowers = [
		new Spell("Invisibility", "hide from you"),
		new Spell("superSpeed", "running from you"),
		new Spell("superSight", "see you"),
		new Spell("superFroze", "will froze you"),
		new Spell("superSkin", "skin is unbreakable"),
	]
	
	let Luther = new SuperDude('Luther', superPowers);
	
      // Тестирование: Методы должны работать и выводить сообщение.
      Luther.superSight();
      Luther.superSpeed();
      Luther.superFroze();
      Luther.Invisibility();
      Luther.superSkin();

