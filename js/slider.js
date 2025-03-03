window.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll('.slider_img');
    const sliderLine = document.querySelector('.slider_line');
    const sliderBtnNext = document.querySelector('.slider_btn-next');
    const sliderBtnPrev = document.querySelector('.slider_btn-prev');

    let sliderCount = 0;
    let sliderWidth;

    window.addEventListener('resize', showSlide);

    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

        rollSlider();
    }
    showSlide();

    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderImages.length) {
            sliderCount = 0;
        }

        rollSlider();
    }

    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0) {
            sliderCount = sliderImages.length -1;
        }

        rollSlider();
    }

    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    sliderLine.addEventListener('touchstart', handleTouchStart, false);
    sliderLine.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
    }

    function handleTouchMove(event) {
        if (!x1) {
            return false;
        }

        let x2 = event.touches[0].clientX;

        let xDiff = x2 - x1;

        if (xDiff > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
        x1 = null;
    }
})