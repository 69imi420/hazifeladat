document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
       
        document.querySelectorAll('p.highlight').forEach(p => {
            p.classList.remove('highlight');
        });

      
        const targetSection = document.querySelector(this.getAttribute('href'));
        const p = targetSection.querySelector('p');
        if (p) {
            p.classList.add('highlight');
        }
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
   
   ;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
