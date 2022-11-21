


   // 3 задание
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
    const form = document.querySelector('.form');
    
    let sum = 0;
    for (let i = 0; i < form.elements.length; i += 1) {
    sum += Number(form.elements[i].value);
    }
    alert(sum);
    }); //цикл перебора всех инпутов и нахождения суммы чисел


    // 4 задание
const sity = {
    0: ['Нью-Йорк', 'Лос-Анджелес', 'Сан-Андреас'],
    1: ['Серов', 'Екатеринбург', 'Краснотуринск'],
    2: ['Флоренция', 'Милан', 'Рим']
};     //массив с городами

const SelectFour = document.querySelector('.four');
const FourTexty = document.querySelector('.text');

SelectFour.addEventListener('change', functionFour);

function functionFour() {
    FourTexty.innerHTML = '';
    const Sity = sity[SelectFour.selectedIndex];

    const Select = document.createElement('select');

    for (let i = 0; i < Sity.length; i += 1) {
        const Option = document.createElement('option');
        Option.innerHTML = Sity[i];
        Select.appendChild(Option);
    }

    FourTexty.appendChild(Select);
};


// 5
let ol=document.getElementById('ol');
let li=document.createElement('li');
li.innerHTML='Пункт';
ol.appendChild(li); //добавление Пункта
//   6
var six = document.getElementsByTagName('a');
for (var i = 0; i < six.length; i++) {
	six[i].addEventListener('mouseover', link);
} 

function link() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
	this.removeEventListener('mouseover', link);
} //функция для вывода href


// 7
var seven = document.getElementsByTagName('div');
for (var i = 0; i < seven.length; i++) {
	seven[i].addEventListener('click', number);
} 

function number() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}//функция выведения числа в квадрат

// 9

const Ul = document.querySelector('.nine');
const Btn = document.querySelector('.btnNine');

Ul.addEventListener('click', nineFunc);
Btn.addEventListener('click', funLi);

function nineFunc(it) {
    it.target.innerHTML=`${it.target.innerHTML} !`;
}; //функция для добавления !

function funLi() {
    const addLi=document.createElement('li');
    addLi.innerHTML='пункт';
    Ul.appendChild(addLi);
}; //функция, которая создаёт тег li с содержимым 'пункт'

// 10
const tenInput = document.querySelector('.tenInput');
const Ten = document.querySelector('.ten');


tenInput.submit.addEventListener('click', ten);
Ten.addEventListener('click', isprav);

function isprav(item) {
    const newValue = prompt("изменить " + item.target.innerHTML, '');
    item.target.innerHTML = newValue;
}; //функция для исправления имени/фамилии

function ten(item) {
    item.preventDefault();

    const addTd = document.createElement('td');
    addTd.innerHTML = tenInput.name.value;

    const addName = document.createElement('td');
    addName.innerHTML = tenInput.family.value;

    const addTr = document.createElement('tr');
    addTr.appendChild(addTd);
    addTr.appendChild(addName);

    Ten.appendChild(addTr);
}; //фукнция для добавлении нового имени и фамилии