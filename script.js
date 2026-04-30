// Navbar toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Typing effect
const text = ["Web Developer", "Frontend Developer", "Freelancer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];

    if (isDeleting) {
        document.getElementById("typing").textContent =
            current.substring(0, j--);
    } else {
        document.getElementById("typing").textContent =
            current.substring(0, j++);
    }

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, 100);
}

type();


