import "./css/styles.css";
import BSN from "bootstrap.native";


// console.log("До виклику тайм аут");

// const id1 = setTimeout((x, y) => {
//     console.log(x, y)
// }, 2000, 987654321, 20)

// const id2 = setTimeout((r) => { console.log(r) }, 5000, 555)

// console.log("Після виклику ТаймАут");

// console.log("id1", id1);
// console.log("id2", id2);
// 
// 
//  
// 
// !!!!!!!!!!!ОПОВЕЩЕНИЯ ОПОВЕЩЕНИЯ ОПОВЕЩЕНИЯ ОПОВЕЩЕНИЯ ОПОВЕЩЕНИЯ ОПОВЕЩЕНИЯ 
// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//     notification: document.querySelector('.js-alert')
// }

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification()

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
// }

// function showNotification() {
//     refs.notification.classList.add('is-visible');

//     timeoutId = setTimeout(() => {
    
//         console.log("Need to close the buttom");
//         hideNotification();
//     }, NOTIFICATION_DELAY)
// }

// function hideNotification() {
//     refs.notification.classList.remove('is-visible');
// }
// 
// 
// 
// 
// !!!!!!!!!НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА НАДОЇДАЛКА 

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_DELAY = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// const modal = new BSN.Modal('#exampleModal');

// const refs = {
//     modal: document.querySelector('#exampleModal'),
//     subscribeBtn: document.querySelector('button[data-subscribe]')
// }

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal)

// refs.subscribeBtn.addEventListener('click', () => {
//     console.log('Ура! Підписалися!!!');
//     hasSubscribed = true;
//     modal.hide();
// })

// function openModal() {
//     if (promptCounter === MAX_PROMPT_DELAY || hasSubscribed) {
//         return;
//     }

// setTimeout(() => {
//     console.log("Open NADOEDALKU");
//     modal.show();
//     promptCounter += 1;
// }, PROMPT_DELAY);
// }
// 
// 
// 
// 
// 
// 
// РОБОТА З ЧАСОМ ///РОБОТА З ЧАСОМ ///РОБОТА З ЧАСОМ ///РОБОТА З ЧАСОМ ///РОБОТА З ЧАСОМ ///РОБОТА З ЧАСОМ ///
// const date = Date();
// console.log(date);

// const date_1 = Date.now();

// setTimeout(() => {
//     const date_2 = Date.now(); 

// console.log("date_1 ", date_1);
//     console.log("date_2 ", date_2);
    
// console.log(date_2 - date_1);}, 3000)
// 
// 
// 
// 
// ТАЙМЕР   ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР  ТАЙМЕР

const timer = {
    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const {hours, mins, secs} = getTimeComponents(deltaTime);
            console.log(`${hours}:${mins}:${secs}`);
        },1000)
    }
}

timer.start();

function pad(value) {
    return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
    const hours =   pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    ;
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }