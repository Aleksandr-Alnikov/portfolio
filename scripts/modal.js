const openBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.modal__container');
const title = document.querySelector('h1');
const glitch1 = document.querySelector('.sss-1');
const glitch2 = document.querySelector('.sss-2');


const addClass = () => {
    overlay.classList.add('modal__visible');
};

export const modal = () => {
    openBtn.addEventListener('click', () => {
        title.classList.add('glitch');
        glitch1.classList.add('span__glitch-1');
        glitch2.classList.add('span__glitch-2');
        setTimeout(addClass, 1000)
    });
};


export const closeModal = () => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay || e.target.closest('.modal_close-btn')) {
            overlay.classList.remove('modal__visible');
            title.classList.remove('glitch');
            glitch1.classList.remove('span__glitch-1');
            glitch2.classList.remove('span__glitch-2');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            overlay.classList.remove('modal__visible');
            title.classList.remove('glitch');
            glitch1.classList.remove('span__glitch-1');
            glitch2.classList.remove('span__glitch-2');
        }
    });
};