<script>
const sections = document.querySelectorAll('main section, .hero, .intro'); // tutte le sezioni principali
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // altezza header fissa
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }

  });
 linkMenu.forEach(a => {
    a.classList.remove("attiva");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("attiva");
    }
  });

});
</script>
const sezioni = document.querySelectorAll('section h2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.3 });

sezioni.forEach(sezione => observer.observe(sezione));