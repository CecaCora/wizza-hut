import App from './App';

const Contact = (() => {
  const page = document.createElement('article');
  page.id = 'contact';

  const contactHeader = document.createElement('h1');
  contactHeader.innerText = 'Contact us?';

  const contactP1 = document.createElement('p');
  contactP1.innerText =
    "Don't get the wrong idea. Here at Wizza Hut, we invite only the most honorable pizza lovers. Not everyone deserves to grace their tastebuds with witch-approved pizza.";

  const contactP2 = document.createElement('p');
  contactP2.innerText =
    'If you truly are the pizza lover you claim to be, we will find you and you will hear from us.';

  const credit1 = document.createElement('p');
  credit1.className = 'credit';
  credit1.innerText =
    "Homepage background image belongs to Azur Lane x Pizza Hut collaboration event. Pizza menu images belong to Pizza Hut Singapore. Wizza Hut logo adapted from Pizza Hut's logo.";

  const credit2 = document.createElement('a');
  credit2.className = 'credit';
  credit2.href = 'https://www.freepik.com/';
  credit2.innerText =
    'Seamless pizza ingredients vector background designed by Sergey_Kandakov / Freepik';

  const contactP3 = document.createElement('p');
  contactP3.innerText = 'No sentient pizza was harmed in the making of this website.';

  page.appendChild(contactHeader);
  page.appendChild(contactP1);
  page.appendChild(contactP2);
  page.appendChild(credit1);
  page.appendChild(credit2);
  page.appendChild(contactP3);

  App.content.appendChild(page);

  const getPage = () => (page.style.display = 'flex');

  return { getPage };
})();

export default Contact;
