// ===== Typing Animation =====
const roles = [
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "CSE Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".home-content h3");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentRole.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===== Active Navbar =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document.querySelector('header nav ul li a[href*=' + id + ']')
                .classList.add("active");
        }
    });
};


// ===== Scroll Reveal Animation =====
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});


// ===== Back To Top Button =====
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#9333ea";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 15px #9333ea";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== Smooth Fade In =====
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});