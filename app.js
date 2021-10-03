const slide = document.querySelectorAll('.carousel-item');
const auto = true;
const intervalTime = 5000;
let slideInterval

class Slide{
    static nextSlide(){
        const active = document.querySelector('.active');
        active.classList.remove('active');
    
        if(active.previousElementSibling){
            active.previousElementSibling.classList.add('active');
        }else{
            slide[slide.length - 1].classList.add('active');
        }
        setTimeout(() => active.classList.remove('active'));
    }
}

if(auto){
    slideInterval = setInterval(Slide.nextSlide, intervalTime);
}

// Fade-in on Scroll
const sliders = document.querySelectorAll('.slide-in');
const fader = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin:'0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

fader.forEach(fade => {
    appearOnScroll.observe(fade);
})
