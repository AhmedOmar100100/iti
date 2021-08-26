// owl carousel courses
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        950: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})



// function to handle close and show video in watch video section
function toggle() {
    var watching = document.querySelector(".watching");
    watching.classList.toggle("active");
}