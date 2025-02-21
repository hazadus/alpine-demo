document.addEventListener("alpine:init", () => {
  // NB: скобки после => обязательны, чтобы вернуть объект
  Alpine.data('signupForm', () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    color: '',
    bio: '',
    newsletter: false,
  }));
});