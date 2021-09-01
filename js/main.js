// function to handle close and show video in watch video section
function toggle() {
    var watching = document.querySelector(".watching");
    watching.classList.toggle("active");
}



// count down until event time
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



fetch("js/data.json").then(response =>
    response.json()).then(data => {
    const { courses } = data;
    console.log(courses);
    console.log(typeof courses);
    text = "";
    courses.forEach(element => {

        textReview = "";
        for (let index = 0; index < element.review; index++) {
            textReview += "<i class='fa fa-star'></i>"
        }
        var off = 5 - element.review;
        if (off > 0) {
            for (let index = 0; index < off; index++) {
                textReview += '<i class="fa fa-star-o"></i>';
            }

        }



        text += `

        <div class="item">

                    <div class="card-image">
                        <div class="thumbail">
                            <img src="images/${element.src}" alt="">
                        </div>
                        <div class="price">${element.price}</div>

                    </div>
                    <div class="row">
                        <div class="left col-9">
                            <div class="card-title">
                                <a href="#">
                                    <h4>${element.title}</h4>
                                </a>
                            </div>
                            <div class="card-info row">
                                <div class="review-stars col-5">
                                    
                                    ${textReview}

                                </div>
                                <div class="comments col-3">${element.comments}
                                    <i class="fa fa-comments-o"></i>
                                </div>
                                <div class="likes col-3">${element.likes}
                                    <i class="fa fa-thumbs-o-up"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right col-2">
                            <div class="instructor-img">
                                <img src="images/${element.instructorImg}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="card-desc">
                       ${element.desc}

                    </div>
                    <div class="course-meta">
                        <div class="row">
                            <div class="col-3 item-meta">
                                <h6>1 Year</h6>
                                <p>course</p>
                            </div>
                            <div class="col-4 item-meta">
                                <h6>45</h6>
                                <p>class size</p>
                            </div>
                            <div class="col-5 item-meta">
                                <h6>${parseInt(element.duration/60)}   hours ${ element.duration%60} min</h6>
                                <p>class Duration</p>

                            </div>
                        </div>
                    </div>

                </div>
        `;

    });
    console.log(text);
    document.getElementById("courses-container").innerHTML = text;
    // owl carousel courses
    $('.courses-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1014: {
                items: 1
            },
            1015: {
                items: 2
            },
            1230: {
                items: 3
            }
        }
    })


});


// const data = JSON.parse()



$('.testimonial-carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        }
    }
})