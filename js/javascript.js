// Obtenemos todos los elementos de menú
var menuItems = document.querySelectorAll('nav ul li a');

// Iteramos sobre cada elemento de menú
menuItems.forEach(function(item) {
  // Añadimos un event listener para el clic en el elemento de menú
  item.addEventListener('click', function() {
    // Desactivamos el checkbox del menú hamburguesa al hacer clic en un ítem
    document.getElementById('menu-toggle').checked = false;
  });
});


// Obtener el botón "Volver arriba"
var btnBackToTop = document.getElementById('btn-back-to-top');

// Añadir un event listener para el desplazamiento de la página
window.addEventListener('scroll', function() {
  // Mostrar u ocultar el botón "Volver arriba" según la posición del desplazamiento
  if (window.pageYOffset > 200) { // Cambia el valor 200 según sea necesario
    btnBackToTop.classList.add('active');
  } else {
    btnBackToTop.classList.remove('active');
  }
});

// Añadir un event listener para el clic en el botón "Volver arriba"
btnBackToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
