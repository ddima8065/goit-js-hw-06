const form = document.querySelector('.login-form');
const formFunc = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
}

if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені") 
}
console.log({
    email: email.value,
    password: password.value
});

form.reset();
form.addEventListener('submit', formFunc)