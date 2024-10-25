window.onload = function() {
    // Scroll to the top but offset by the height of the navbar
    window.scrollTo({
        top: 1, // This ensures you create a small scroll distance
        behavior: "smooth" // Ensures smooth behavior like clicking on the "Home" button
    });
};

// navigation bar effect
const navbar = document.querySelector(".navcontainer");
const logo = document.querySelector(".logo");
window.onscroll = () => {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.style.height = "60px";
		navbar.style.fontSize = "14px";
		logo.classList.add("logo-small");
	} else {
		navbar.style.height = "100px";
		navbar.style.fontSize = "16px";
		logo.classList.remove("logo-small");
	}
}

// pfp effect
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("#pfp");
    const homeSection = document.querySelector("#home");

    const observerOptions = {
        root: null, 
        threshold: 0.1 // initiate when 10% of home side becomes visible
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add("visible");
            } else {
                image.classList.remove("visible");
            }
        });
    }, observerOptions);

    observer.observe(homeSection);
});

// language logo effect

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".language-content img");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); 
            }
        });
    }, {
        threshold: 0.1 // initite when 10% of image is visible
    });

    // Observe each image in the language section
    images.forEach(img => {
        observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".contact-opt img");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); 
            }
        });
    }, {
        threshold: 0.1 // initite when 50% of image is visible
    });

    // Observe each image in the language section
    images.forEach(img => {
        observer.observe(img);
    });
});

