const monthCheckBox  = document.querySelector('#monthly');
const weekCheckBox  = document.querySelector('#weekly');
const timeBox  = document.querySelector('#time');
const infinityCheckBox  = document.querySelector('#infinity');
const firstPayCheckBox  = document.querySelector('#howmany');
const days = document.querySelector('.form__days');
const popup = document.querySelector('.popup');
const month = document.querySelector('.form__month');
const frequency = document.querySelector('.form__frequency');
const calendar = document.querySelector('.form__link');
const button = document.querySelector('.form__save');


frequencyDisabled()
function frequencyDisabled() {
    frequency.setAttribute('disabled', 'disabled');
    frequency.value = "once";
}

function frequencyEnabled() {
    frequency.removeAttribute( 'disabled');
}
 function daysDisabled() {
 days.setAttribute('disabled', 'disabled');
}

function daysEnabled() {
    days.removeAttribute( 'disabled');
}
function monthDisabled() {
    month.setAttribute('disabled', 'disabled');
}

function monthEnabled() {
    month.removeAttribute( 'disabled');
}

timeBox.onchange = function () {
     console.log(this.value);
     timeOfPay.textContent=this.value;
}

const res = document.querySelector('#result');
const timeOfPay = document.querySelector('#timeOfPay');

const res1 = document.querySelector('#result1');

const res2 = document.querySelector('#result2');

const res3 = document.querySelector('#result3');

const res4 = document.querySelector('#result4');

const res5 = document.querySelector('#result5');
const number = 0;
let numberOfDaysToAdd = 0;
frequency.onchange = function () {
    if (this.value === 'once') {
        numberOfDaysToAdd = number;
        changeMonth()
    } else if (this.value === 'twice') {
res.textContent ='---------'
    }
}


month.onchange = function () {
    monthEnabled()
    if (this.value === 'once') {
        numberOfDaysToAdd = number;
        changeMonth()
    } else if (this.value === 'twice') {
        numberOfDaysToAdd = number;
        changeMonthTwice()
    }
}
days.onchange = function() {
daysEnabled();
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
function openPopup() {
    popup.classList.add("popup_opened");
}
function clickClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
        closePopup(evt.target);
    }
}
function escClose(evt) {
    if (evt.key === "Escape") {

            if (popup.classList.contains("popup_opened")) {
                closePopup();
            }
    }
}
popup.addEventListener("click", clickClose);
document.addEventListener("keydown", escClose);
function closePopup() {
    popup.classList.remove("popup_opened");
}
function clickButton(evt) {
 evt.preventDefault()
}


button.addEventListener('click', clickButton);
calendar.addEventListener('click', openPopup);
monthCheckBox.addEventListener('click', daysDisabled);
monthCheckBox.addEventListener('click', monthEnabled);
monthCheckBox.addEventListener('click', frequencyDisabled);
infinityCheckBox.addEventListener('click', frequencyDisabled);
infinityCheckBox.addEventListener('click', changeMonth);
weekCheckBox.addEventListener('click', daysEnabled);
weekCheckBox.addEventListener('click', monthDisabled);
firstPayCheckBox.addEventListener('click', frequencyEnabled);