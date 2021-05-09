// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// switch button
const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener('click', () => {
    if (!switchBtn.classList.contains("slide")){
        switchBtn.classList.add("slide");
        video.pause();
    } 
    else {
        switchBtn.classList.remove("slide");
        video.play();
    }
})

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.toggle('hide-preloader');
})

