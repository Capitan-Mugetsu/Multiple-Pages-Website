/*---------------------------
    testimonials slider
----------------------------- */

function testimonialsSlider() {
    const carouselOne = document.getElementById('carouselOne')

    if(carouselOne) {
        const carouselOne = document.getElementById('carouselOne')

        if (carouselOne) {
            carouselOne.addEventListener('slide.bs.carousel', function () {
                const activeItem = this.querySelector('.active')
                document.querySelector('.js-testimonial-img').src = activeItem.getAttribute('data-js-testimonial-img')
            })
        }
    }
}

testimonialsSlider()