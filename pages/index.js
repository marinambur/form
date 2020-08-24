//const  = document.getElementById('weekly');
/*if (dayCheckBox.onchange) {
    console.log('Выбран');
}
else {
    console.log ('Не выбран');



}*/

const res = document.querySelector('#result');

const res1 = document.querySelector('#result1');

const res2 = document.querySelector('#result2');

const res3 = document.querySelector('#result3');

const res4 = document.querySelector('#result4');

const res5 = document.querySelector('#result5');
const number = 0;
let numberOfDaysToAdd = 0;
const days = document.querySelector('.form__days');
days.onchange = function() {
    if (this.value === 'tuesday') {
        numberOfDaysToAdd = number +1;
        changeDay()
    } else if (this.value === 'wednesday') {
        numberOfDaysToAdd = number +2;
        changeDay()
    } else if (this.value === 'thursday') {
        numberOfDaysToAdd = number +3;
        changeDay()
    } else if (this.value === 'friday') {
        numberOfDaysToAdd = number +4;
        changeDay()
    } else if (this.value === 'saturday') {
        numberOfDaysToAdd = number +5;
        changeDay()
    } else if (this.value === 'sunday') {
        numberOfDaysToAdd = number +6;
        changeDay()
    } else if (this.value === 'monday') {
        numberOfDaysToAdd = number;
        changeDay()
    }
}

const changeDay = function() {
let someDate = new Date();
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
  let firstDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 7)
    let secondDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 7)
    let thirdDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 7)
    let fourthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 7)
    let fifthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 7)
    let sevenDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });

   res.textContent = firstDate;
  res1.textContent = secondDate;
    res2.textContent = thirdDate;
    res3.textContent = fourthDate;
    res4.textContent = fifthDate;
    res5.textContent = sevenDate;
}
changeDay();
//let number = 1;
/*const days = document.querySelector('.form__days');
days.onchange = function() {
   if (this.value === 'tuesday') {
       number = number +1;
       changeDay()
   } else if (this.value === 'wednesday') {
       number = number +2;
       changeDay()
   }
}*/


//res.textContent = `строка текста ${number} строка текста`;

//const dayCheckBox = document.querySelector('#weekly');


