// Typing Animation
const typed = new Typed(".multiple-text", {
    strings: [
        "Software Developer",
        "AI Enthusiast",
        "Python Developer",
        "C# Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// AOS Scroll Animations
AOS.init({
    duration: 1000,
    once: true
});

// Particle Background
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#38bdf8" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.2,
            width: 1
        }
    }
});

// Animated Counters
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target; 
        }
    };

    updateCounter();
});

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{

    navbar.classList.toggle("active");

}

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const themeBtn=document.getElementById("theme-btn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fas fa-moon"></i>';

}

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

const isLight=document.body.classList.contains("light");

localStorage.setItem("theme",isLight?"light":"dark");

themeBtn.innerHTML=isLight?

'<i class="fas fa-sun"></i>'

:

'<i class="fas fa-moon"></i>';

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});