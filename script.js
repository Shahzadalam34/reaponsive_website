const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentIndex].style.transform = `translateX(100%)`;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].style.transform = `translateX(0)`;
});

document.querySelector('.next').addEventListener('click', () => {
    slides[currentIndex].style.transform = `translateX(-100%)`;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.transform = `translateX(0)`;
    if (currentIndex==slides.length){
        currentIndex=0;

    }
});



// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// document.querySelector('.prev').addEventListener('click', () => {
//     slides[currentIndex].style.transform = `translateX(100%)`;
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     slides[currentIndex].style.transform = `translateX(0)`;
// });

// document.querySelector('.next').addEventListener('click', () => {
//     slides[currentIndex].style.transform = `translateX(-100%)`;
//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].style.transform = `translateX(0)`;
// });

