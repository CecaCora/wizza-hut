import App from './App';

const Home = (() => {
  const page = document.createElement('article');
  page.id = 'home';

  const homeMessage = document.createElement('h1');
  homeMessage.innerText = 'Only the finest witch-approved pizza!';

  page.appendChild(homeMessage);
  page.style.display = 'flex';

  App.content.appendChild(page);

  const getPage = () => (page.style.display = 'flex');

  return { getPage };
})();

export default Home;
