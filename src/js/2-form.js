let formData = {
    email: "",
    message: ""
};


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};


const handleInput = (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
};


form.addEventListener('input', handleInput);


document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        form.reset();
    }
});