/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

// Actualització de l'enllaç actiu del navbar del header+footer
console.log("Test")
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
// Seleccionem tots els enllaços del menú de navegació.
const navLinks = document.querySelectorAll('.site-header__link');

navLinks.forEach((link) => {
  // Recuperem el valor de l'atribut href de cada enllaç.
  const linkPage = link.getAttribute('href');

  // Modifiquem la classe "active" segons si l'enllaç coincideix amb la pàgina actual.
  link.classList.toggle('active', linkPage === currentPage);
});


