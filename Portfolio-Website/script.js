var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "Backend Developer",
        "Problem Solver"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ===== Theme Toggle =====

const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            toggle.innerHTML="☀️";

        }

        else{

            toggle.innerHTML="🌙";
        }

    });
}

// ===== Mobile Menu Toggle =====

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const expanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", expanded);
    });
}

// ===== Active Nav Link on Scroll =====

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNavLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
            });
        }
    });
}

window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);

// ===== Contact Form =====

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const message = document.getElementById("message")?.value.trim() || "";

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill all the fields before sending.";
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:rewatiraman456@gmail.com?subject=${subject}&body=${body}`;

        formStatus.textContent = "Opening your email app...";
        contactForm.reset();
    });
}

// ===== Scroll Reveal =====

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach((item) => observer.observe(item));

// ===== Scroll Progress Bar =====

window.onscroll = function () {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

};


// ===== Scroll To Top =====

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};