document.addEventListener("alpine:init", () => {
    // NB: скобки после => обязательны, чтобы вернуть объект
    Alpine.data('counter', () => ({
        count: 0,
        title: 'The Counter',
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }));
});