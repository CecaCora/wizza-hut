import App from './App';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

const Nav = (() => {
  const nav = document.createElement('nav');

  const logo = document.createElement('a');
  logo.className = 'logo';
  logo.addEventListener('click', () => {
    App.clear();
    Home.getPage();
  });

  const logoImg = document.createElement('img');
  logoImg.src = 'images/wizza-hut.png';
  logoImg.alt = 'Wizza Hut';
  logo.appendChild(logoImg);
  nav.appendChild(logo);

  const menuLink = document.createElement('a');
  menuLink.addEventListener('click', () => {
    App.clear();
    Menu.getPage();
  });

  menuLink.className = 'nav-link';
  menuLink.innerText = 'Menu';
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.addEventListener('click', () => {
    App.clear();
    Contact.getPage();
  });

  contactLink.className = 'nav-link';
  contactLink.innerText = 'Contact';
  nav.appendChild(contactLink);

  App.content.appendChild(nav);
})();
