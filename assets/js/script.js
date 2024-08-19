document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    function showSlide(i) {
        if (i >= slideCount) {
            index = 0;
        } else if (i < 0) {
            index = slideCount - 1;
        } else {
            index = i;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(index - 1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(index + 1);
    });

    // Opcional: Auto play
    setInterval(function() {
        showSlide(index + 1);
    }, 15000);
});
