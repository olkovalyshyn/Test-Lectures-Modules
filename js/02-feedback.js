// import '../css/common.css';
// import '../css/feedback-form.css';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(evt) { 
    evt.preventDefault();
    
    console.log('Відправляємо форму');
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-msg');
};

function onTextareaInput(evt) { 
    const message = evt.currentTarget.value;

    localStorage.setItem('feedback-msg', message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem("feedback-msg");

    if (savedMessage) {
        console.log("Там щось є: ", savedMessage);
        refs.textarea.value = savedMessage;
    }
 };