const reviewBox = document.querySelectorAll('.review-content');
let currentIndex = 0;

function isMobile() {
    return window.innerWidth <= 767
}


function showNextTestimonial() {
    if (!isMobile()) return;


    reviewBox[currentIndex].classList.add('active');
    reviewBox[currentIndex].classList.remove('prev');

    currentIndex = (currentIndex + 1) % reviewBox.length;

    reviewBox.forEach((el, i) => {
        if (i !== currentIndex) {
            el.classList.remove('active', 'prev')
        }
    });

    reviewBox[currentIndex].classList.add('active');

}

setInterval(showNextTestimonial, 4000);