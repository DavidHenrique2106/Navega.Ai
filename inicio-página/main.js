window.alert("Bem vindo ao Navega.Ai!")

const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('mouseenter', () => {
    scrollContainer.style.overflowX = 'scroll';
});
