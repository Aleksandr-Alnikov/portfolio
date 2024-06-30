const slideBtn = document.querySelector('.projects__link-next');
const slideBox = document.querySelectorAll('.projects__block');

let index = 1;


const showSlide = (i) => {
    if (i > slideBox.length) {
        index = 1;
    }
    if ( i < 1) {
        index = slideBox;
    }

    slideBox.forEach(item => item.style.display = 'none')
    slideBox[index - 1].style.display = '';
};

export const launchSlide = () => {
    const plusSlide = (i) => {
        showSlide(index += i);
    };

    slideBtn.addEventListener('click', () => {
        plusSlide(1)
    })
}


showSlide(index)