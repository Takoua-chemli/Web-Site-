const container = document.getElementById("form-container");

const overlaySignInButton = document.getElementById("overlay-sign-in-btn");
const overlaySignUpButton = document.getElementById("overlay-sign-up-btn");

overlaySignUpButton.addEventListener('click', () => {
    container.classList.add('panel-2-active');
})
overlaySignInButton.addEventListener('click', () => {
    container.classList.remove('panel-2-active');
})