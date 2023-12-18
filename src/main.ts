import { showReviewTotal, populateUser } from './utils.js';

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: true,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
  },
];

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: 'Bobby',
  lastName: 'Womack',
  isReturning: true,
  age: 45,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

const result = reviews.reduce((r, o) => (o.date > r.date ? o : r));

const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: 'images/colombian-shack.jpeg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia',
    },
    contact: 'marywinkle@gmail.com',
    isAvailable: true,
  },
  {
    image: 'images/polish-cottage.webp',
    title: 'Polish Cottage',
    price: 34,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland',
    },
    contact: 'garydavis@hotmail.com',
    isAvailable: false,
  },
  {
    image: 'images/london-flat.jpeg',
    title: 'London Flat',
    price: 23,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: 'andyluger@aol.com',
    isAvailable: true,
  },
];

showReviewTotal(reviews.length, result.name, result.loyaltyUser);
populateUser(you.isReturning, you.firstName);

const propertyContainer = document.querySelector('.properties');

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  propertyContainer?.appendChild(card);
}

console.log(propertyContainer);
