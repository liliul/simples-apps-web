// Usando o framework para criar e montar componentes
document.addEventListener('DOMContentLoaded', () => {
  const counter = new Counter();
  counter.mount('#app');

  const button = new Button({ label: 'Click Me' });
  button.mount('#app');
});
