const monthCheckBox  = document.querySelector('#monthly');
const weekCheckBox  = document.querySelector('#weekly');
const timeBox  = document.querySelector('#time');
const days = document.querySelector('.form__days');
const month = document.querySelector('.form__month');
 function daysDisabled() {

 days.setAttribute('disabled', 'disabled');

   // days.removeAttribute('disabled');

}

timeBox.onChange = function () {
     console.log(this.value);
}
monthCheckBox.addEventListener('click', daysDisabled);




const res = document.querySelector('#result');

const res1 = document.querySelector('#result1');

const res2 = document.querySelector('#result2');

const res3 = document.querySelector('#result3');

const res4 = document.querySelector('#result4');

const res5 = document.querySelector('#result5');
const number = 0;
let numberOfDaysToAdd = 0;
month.onChange = function () {
    daysDisabled();
    if (this.value === 'once') {
        numberOfDaysToAdd = number +30;
        changeMonth()
    } else if (this.value === 'twice') {
        numberOfDaysToAdd = number +14;
        changeMonth()
    }
}
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
//changeDay();

const changeMonth = function() {
    let someDate = new Date();
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
    let firstDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 30)
    let secondDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 30)
    let thirdDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 30)
    let fourthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 30)
    let fifthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 30)
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

const changeMonthTwice = function() {
    let someDate = new Date();
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
    let firstDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 14)
    let secondDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 14)
    let thirdDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 14)
    let fourthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 14)
    let fifthDate= someDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
    });
    someDate.setDate(someDate.getDate() + 14)
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
//changeMonth();
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


