// ==========================
// LOADING
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 1800);

});



// ==========================
// ELEMENT
// ==========================

const openBtn = document.getElementById("openBtn");

const continueBtn = document.getElementById("continueBtn");

const music = document.getElementById("bgMusic");

const envelope = document.getElementById("envelopeSection");

const hero = document.getElementById("hero");



// ==========================
// OPEN INVITATION
// ==========================

hero.style.display = "none";
envelope.style.display = "none";

openBtn.addEventListener("click", () => {

    document.getElementById("welcome").style.display = "none";

    envelope.style.display = "flex";

});



continueBtn.addEventListener("click", () => {

    envelope.style.display = "none";

    hero.style.display = "flex";

    music.play().catch(() => {});



    window.scrollTo({

        top: hero.offsetTop,

        behavior: "smooth"

    });

});



// ==========================
// COUNTDOWN
// ==========================

const targetDate = new Date("August 8, 2026 10:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(countdown,1000);
countdown();
// ==========================
// HOA RƠI
// ==========================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-30px";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.opacity = Math.random();
    petal.style.zIndex = "999";
    petal.style.pointerEvents = "none";

    document.body.appendChild(petal);

    let top = -30;
    let left = parseFloat(petal.style.left);

    const speed = 1 + Math.random() * 3;

    const timer = setInterval(() => {

        top += speed;
        left += Math.sin(top / 40);

        petal.style.top = top + "px";
        petal.style.left = left + "px";

        if (top > window.innerHeight + 50) {
            clearInterval(timer);
            petal.remove();
        }

    }, 20);

}

setInterval(createPetal, 500);



// ==========================
// TIM BAY
// ==========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 15) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let bottom = -30;

    const timer = setInterval(() => {

        bottom += 2;

        heart.style.bottom = bottom + "px";
        heart.style.opacity = 1 - bottom / window.innerHeight;

        if (bottom > window.innerHeight + 30) {

            clearInterval(timer);

            heart.remove();

        }

    }, 20);

}

setInterval(createHeart, 1200);
// ==========================
// HIỆU ỨNG XUẤT HIỆN
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(80px)";

    section.style.transition = "1s";

    observer.observe(section);

});



// ==========================
// NÚT MAP
// ==========================

const mapBtn = document.querySelector(".map-btn");

mapBtn.addEventListener("mouseenter", () => {

    mapBtn.style.boxShadow = "0 0 25px #ff4d94";

});

mapBtn.addEventListener("mouseleave", () => {

    mapBtn.style.boxShadow = "none";

});



// ==========================
// CHỮ KÝ
// ==========================

const signature = document.querySelector(".signature");

signature.style.animation = "heart 2s infinite";
// ==========================
// CONFETTI KHI MỞ THIỆP
// ==========================

continueBtn.addEventListener("click", () => {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (18 + Math.random() * 12) + "px";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let top = -30;

        const speed = 2 + Math.random() * 4;

        const timer = setInterval(() => {

            top += speed;

            confetti.style.top = top + "px";
            confetti.style.transform =
                "rotate(" + top * 5 + "deg)";

            if (top > window.innerHeight + 50) {

                clearInterval(timer);

                confetti.remove();

            }

        }, 20);

    }

});



// ==========================
// KẾT THÚC
// ==========================

console.log("Graduation Invitation Ready ❤️");

// Phát nhạc khi người dùng bấm nút MỞ THIỆP
document.getElementById('openBtn').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    if (audio) {
        audio.play().then(function() {
            console.log("Đã phát nhạc thành công!");
        }).catch(function(error) {
            console.log("Lỗi phát nhạc: ", error);
        });
    }
});
