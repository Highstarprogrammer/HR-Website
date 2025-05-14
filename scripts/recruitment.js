const navBtn = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    })
});

document.querySelectorAll('.reveal-on-scroll').forEach(section => {
    observer.observe(section);
});
document.querySelectorAll('.reveal-on-scroll-right').forEach(section => {
    observer.observe(section);
});
document.querySelectorAll('.reveal-on-scroll-left').forEach(section => {
    observer.observe(section);
});

navBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    overlay.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
})

overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.style.display = 'none';
})