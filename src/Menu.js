import App from './App';

const Menu = (() => {
  const page = document.createElement('article');
  page.id = 'menu';

  const menuHeader = document.createElement('h1');
  menuHeader.innerText = 'Menu';

  const pizzaTypes = ['Classics', 'Favourites', 'Specialties'];

  const menuItems = [
    {
      pizzaType: 'classics',
      pizzaName: 'Hawaiian',
      pizzaInfo:
        'An all-time favourite. Tender chicken ham combined with sweet and succulent pineapple chunks for a taste of the good ol’ days.',
      pizzaImg: 'hawaiian',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Chicken Supreme',
      pizzaInfo:
        'Sink your teeth into a generous spread of savoury chicken ham, spicy chicken chunks, roasted chicken, topped with onions, capsicums and mushrooms.',
      pizzaImg: 'chicken-supreme',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Super Supreme',
      pizzaInfo:
        'Always a house favourite, combining juicy ground beef, smoky cabanossi sausages, beef pepperoni, chicken ham, and a luscious mix of capsicums, onions, olives, mushrooms and pineapple chunks.',
      pizzaImg: 'super-supreme',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Pepperoni',
      pizzaInfo:
        'Combining the aromatic flavour of beef pepperoni and 100% mozzarella cheese. Classic treat that’s always a great choice.',
      pizzaImg: 'pepperoni',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Veggie Lover’s',
      pizzaInfo:
        'Delightful combination of garden fresh mushrooms, onions, olives and capsicums, sweetened with pineapple chunks and diced tomatoes.',
      pizzaImg: 'veggie-lovers',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Curry Chicken',
      pizzaInfo:
        'Italian classic meets local favourite. Spicy chicken chunks, potatoes, onions and diced tomatoes come together for an authentic flavour of rich spices.',
      pizzaImg: 'curry-chicken',
    },
    {
      pizzaType: 'classics',
      pizzaName: 'Meat Galore',
      pizzaInfo:
        'The perfect meat-lover’s choice. Chicken ham, pepperoni, minced beef and cabanossi sausages, with tomato mozzarella melt.',
      pizzaImg: 'meat-galore',
    },
    {
      pizzaType: 'favourites',
      pizzaName: 'BBQ Chunky Chic',
      pizzaInfo:
        'Spicy chicken chunks together with pineapple chunks and onions, baked on a sweet and smoky BBQ sauce.',
      pizzaImg: 'bbq-chunky-chic',
    },
    {
      pizzaType: 'favourites',
      pizzaName: "Chic Ham 'n' Shroom",
      pizzaInfo: 'Tender chicken ham with mushrooms.',
      pizzaImg: 'chic-ham-n-shroom',
    },
    {
      pizzaType: 'favourites',
      pizzaName: "Cheese 'n' Chic",
      pizzaInfo:
        'Roasted chicken chunks, pineapple chunks and mushrooms, topped with herbs, cheese mix and parsley.',
      pizzaImg: 'cheese-n-chic',
    },
    {
      pizzaType: 'favourites',
      pizzaName: 'Simply Cheese',
      pizzaInfo:
        'Freshly grated cheddar and mozzarella cheese, baked with diced tomatoes in Alfredo sauce.',
      pizzaImg: 'simply-cheese',
    },
    {
      pizzaType: 'favourites',
      pizzaName: 'Ocean Delight',
      pizzaInfo:
        'Taste the freshness in this combination of succulent squid and tasty tuna, topped with a mix of mushrooms, onions and capsicums.',
      pizzaImg: 'ocean-delight',
    },
    {
      pizzaType: 'favourites',
      pizzaName: 'Very Beefy',
      pizzaInfo: 'A marriage of cabanossi sausages and ground beef with a hint of onion.',
      pizzaImg: 'very-beefy',
    },
    {
      pizzaType: 'specialties',
      pizzaName: 'Truffle Shuffle',
      pizzaInfo:
        'Marinated truffle mushrooms, cherry tomatoes and mozzarella cheese baked on top of creamy alfredo sauce.',
      pizzaImg: 'truffle-shuffle',
    },
    {
      pizzaType: 'specialties',
      pizzaName: 'BBQ Chicken',
      pizzaInfo:
        'Spicy chicken chunks, chicken ham, luscious pineapple chunks with fresh capsicums, baked on a sweet and smoky BBQ sauce.',
      pizzaImg: 'bbq-chicken',
    },
    {
      pizzaType: 'specialties',
      pizzaName: 'The Four Cheese',
      pizzaInfo:
        'Send your tastebuds into a cheesy frenzy with a divine combination of 4 cheeses - mozzarella, parmesan, cheddar and cream cheese.',
      pizzaImg: 'the-four-cheese',
    },
    {
      pizzaType: 'specialties',
      pizzaName: 'Seafood Deluxe',
      pizzaInfo:
        'Taste the freshness of the ocean in this combination of juicy prawns marinated in spices, succulent squid and tasty tuna.',
      pizzaImg: 'seafood-deluxe',
    },
    {
      pizzaType: 'specialties',
      pizzaName: 'Hawaiian Supreme',
      pizzaInfo:
        'Chunky chicken ham, chicken ham slices and pineapples finished with a creamy cheese drizzle.',
      pizzaImg: 'hawaiian-supreme',
    },
  ];

  page.appendChild(menuHeader);

  pizzaTypes.forEach((type) => {
    let node = document.createElement('section');
    node.id = type.toLowerCase();
    let nodeHeader = document.createElement('h2');
    nodeHeader.innerText = type;

    node.appendChild(nodeHeader);
    page.appendChild(node);
  });

  App.content.appendChild(page);

  menuItems.forEach(({ pizzaType, pizzaName, pizzaInfo, pizzaImg }) => {
    let node = document.createElement('article');
    let nodeImg = document.createElement('img');
    nodeImg.src = `images/${pizzaType}-${pizzaImg}.jpg`;
    nodeImg.alt = pizzaName;
    let nodeHeader = document.createElement('h3');
    nodeHeader.innerText = pizzaName;
    let nodeP = document.createElement('p');
    nodeP.innerText = pizzaInfo;

    node.appendChild(nodeImg);
    node.appendChild(nodeHeader);
    node.appendChild(nodeP);

    document.querySelector(`#${pizzaType}`).appendChild(node);
  });

  const getPage = () => (page.style.display = 'flex');

  return { getPage };
})();

export default Menu;
