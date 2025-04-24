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


// Apartado del plan deseado del formulario

document.addEventListener('DOMContentLoaded', function () {
  const zonaInput = document.getElementById('zona');
  const planSelect = document.getElementById('plan');
  const planesContainer = document.getElementById('planes-container');
  const precioPlan = document.getElementById('precio-plan');

  const planesYPrecios = {
    'guarreña': [
      { nombre: 'Seleccione una opción'},
      { nombre: 'Fibra 300Mbs + móvil 60GB', precio: '35,95 €/mes' },
      { nombre: 'Fibra 600Mbs + 2 móviles 60GB', precio: '45 €/mes' },
    ],
    'abiertas': [
      { nombre: 'Seleccione una opción'},
      { nombre: 'Fibra 50Mbs + móvil 60GB', precio: '35,95 €/mes' },
    ],
    'chaparrito': [
      { nombre: 'Seleccione una opción'},
      { nombre: 'Fibra 100Mbs + móvil 60GB', precio: '41,90 €/mes' },
      { nombre: 'Fibra 100Mbs + 2 móviles 60GB', precio: '47,90 €/mes' }
    ]
  };

  const planPorDefecto = [
    { nombre: 'Seleccione una opción'},
    { nombre: 'Fibra 100Mbs', precio: '80 €/mes' }
  ];

  function mostrarPlanes() {
    const zona = zonaInput.value.trim().toLowerCase();
    const planes = planesYPrecios[zona] || planPorDefecto;

    planSelect.innerHTML = ''; // Limpiar opciones previas
    planes.forEach(plan => {
      const option = document.createElement('option');
      option.value = plan.nombre;
      option.textContent = plan.nombre;
      option.dataset.precio = plan.precio;
      planSelect.appendChild(option);
    });
    planesContainer.style.display = 'block';
    
    // Mostrar precio del primer plan por defecto
    if (planes.length > 0) {
      precioPlan.textContent = `Precio: ${planes[0].precio}`;
      precioPlan.style.display = 'block';
    }
  }

  function actualizarPrecio() {
    const selectedOption = planSelect.options[planSelect.selectedIndex];
    if (selectedOption && selectedOption.dataset.precio) {
      precioPlan.textContent = `Precio: ${selectedOption.dataset.precio}`;
      precioPlan.style.display = 'block';
    }
  }

  zonaInput.addEventListener('input', mostrarPlanes);
  planSelect.addEventListener('change', actualizarPrecio);
});