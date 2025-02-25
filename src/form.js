document.addEventListener("alpine:init", () => {
  // NB: скобки после => обязательны, чтобы вернуть объект
  Alpine.data('signupForm', () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    color: '',
    bio: '',
    newsletter: false,
    showPassword: false,

    errors: {},
    validateForm(){
      this.errors = {};
      
      if (this.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters long';
      }
      if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters long';
      }
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = 'Passwords do not match';
      }
      if (!this.color) {
        this.errors.color = 'Please select a color';
      }
      if (this.bio.length < 10) {
        this.errors.bio = 'Bio must be at least 10 characters long';
      }
    },

    // В качестве параметра может быть передано событие $event
    submitForm($event) {
      this.validateForm();
      
      if (Object.keys(this.errors).length > 0) {
        alert('❌ Form has errors');
        console.log(this.errors);
        return
      }

      alert('✅ Form submitted!');
      // В данном случае событие будет submit, а цель - форма
      // Очистим форму после "отправки" данных
      $event.target.reset();
    }
  }));
});