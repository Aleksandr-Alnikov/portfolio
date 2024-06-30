export const openBurger = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const open = document.querySelector('.header');

    burgerBtn.addEventListener('click',() => {
        open.classList.toggle('open');
    });
};