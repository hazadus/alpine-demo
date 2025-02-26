document.addEventListener("alpine:init", () => {
  // NB: скобки после => обязательны, чтобы вернуть объект
  Alpine.data('demo', () => ({
    posts: [],

    // Метод, который будет вызван при инициализации компонента
    init() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => this.posts = data);
    },
  }));
});