const animate1 = anime.timeline({
    targets: ".circle",
    loop: true,
    duration: 2000,
    direction: "alternate",
    easing: "easeInOutQuad",
});
animate1.add({
    translateX: 350,
});

let dot = document.querySelectorAll(".dot");
for (let i = 0; i < dot.length; i++) {
    const ind = dot[i];
    const animate2 = anime.timeline({
        targets: ind,
        loop: true,
        direction: "alternate",
        delay: i * 100,
    });
    animate2.add({
        scale: 2,
    });
}

let span = document.querySelectorAll(".content .text span");
const animate3 = anime.timeline({
    targets: span,
    easing: "easeInOutExpo",
    delay: anime.stagger(20, { direction: "reverse" }),
    direction: "reverse",
    autoplay: false,
});

animate3.add({
    rotate: () => {
        return anime.random(-360, 360);
    },
    translateX: () => {
        return anime.random(-500, 500);
    },
    translateY: () => {
        return anime.random(-500, 500);
    },
    duration: 3000,
});

const animate4 = anime({
    targets: ".button",
    scale: [0, 1],
    delay: anime.stagger(200, { start: 7000 }),
    autoplay: false,
});

const animate5 = anime({
    targets: [
        document.querySelectorAll(".info"),
        document.querySelectorAll(".inp_field"),
        ".message",
        ".submit",
    ],
    translateY: [50, 0],
    rotateX: [90, 0],
    opacity: [0, 1],
    delay: anime.stagger(300, { start: 1000 }),
    duration: 750,
    autoplay: false,
    easing: "easeOutQuint",
});

const animate6 = anime({
    targets: ['.services .t_dummy', '.services .hero-text'],
    duration: 1000,
    scaleX: [0, 1],
    delay: anime.stagger(300, {start: 1000}),
    autoplay: false,
});

function resize() {
    if (window.innerWidth <= 632) {
        animate5.play();
        animate3.play();
        animate4.play();
        animate6.play();
    }
}
resize();
window.addEventListener("resize", resize);