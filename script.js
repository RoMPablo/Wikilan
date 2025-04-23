// Función para mostrar un menú desplegable para el movil

function toggleMenu() {
    document.body.classList.toggle('nav-open');
  }
  
function closeMenu() {
    document.body.classList.remove('nav-open');
}

// Función de scroll suave hasta la parte de seccion de planes
  function scrollToPlans() {
    const target = document.querySelector('#planes');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

// Función para animar las zonas a la hora de hacer scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);

// Función para cambiar el tema de la página
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector('.theme-toggle');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('light-mode') ? '🌞' : '🌙';
}
