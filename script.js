// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#03C988';
    });

    link.addEventListener('mouseout', function () {
        this.style.color = '#fff';
    });
});
