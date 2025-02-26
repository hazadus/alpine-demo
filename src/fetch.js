document.addEventListener("alpine:init", () => {
  // NB: скобки после => обязательны, чтобы вернуть объект
  Alpine.data('demo', () => ({
    posts: [],
    color: '',

    // Метод, который будет вызван при инициализации компонента
    init() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => this.posts = data);

      // Устанавливаем слежение за изменениями переменной color
      this.$watch('color', (newColor, oldColor) => {
        console.log(`Color changed from ${oldColor} to ${newColor}`);
        document.body.style.backgroundColor = newColor;
      });
    },
  }));
});