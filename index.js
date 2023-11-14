const backToTop = document.querySelector('.back-to-top');
const observerTarget = document.querySelector("#name")


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            backToTop.classList.add("shown");
            //console.log("Back-to-top button visible");
        } else {
            backToTop.classList.remove("shown");
            //console.log("Back-to-top button hidden");
        }
    })
})

observer.observe(observerTarget)