import {
  showReviewTotal,
  populateUser,
  getTopTwoReviews,
  showDetails,
} from './utils.js';
import { Permissions, LoyaltyUser } from './enum.js';
import { Price, Country } from './types.js';
import { Review, Property } from './interfaces.js';
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');

let isLoggedIn: boolean;

const reviews: Review[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '03-28-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '03-27-2021',
    description: 'Avid traveler that has a thirst for different cultures',
  },
];

// const you: {
//   firstName: string;
//   lastName: string;
//   isReturning: boolean;
//   age: number;
//   stayedAt: string[];
// } = {
//   firstName: 'Bobby',
//   lastName: 'Womack',
//   isReturning: true,
//   age: 45,
//   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
// };

const you = {
  firstName: 'Bobby',
  lastName: 'Womack',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 45,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

const result = reviews.reduce((r, o) => (o.date > r.date ? o : r));

const properties: Property[] = [
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
    price: 30,
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
    price: 25,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: 'andyluger@aol.com',
    isAvailable: true,
  },
  {
    image: 'images/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
      firstLine: 'Room 4',
      city: 'Malia',
      code: 45334,
      country: 'Malaysia',
    },
    contact: +60349822083,
    isAvailable: false,
  },
];

showReviewTotal(reviews.length, result.name, result.loyaltyUser);
populateUser(you.isReturning, you.firstName);

let authorityStatus: any;

isLoggedIn = true;

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  propertyContainer?.appendChild(card);
  showDetails(isLoggedIn /* or you.permissions */, card, properties[i].price);
}

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    console.log(topTwo);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
      reviewContainer!.appendChild(card);
    }
    container!.removeChild(button!);
  }
}

if (button !== null) {
  button.addEventListener('click', () => addReviews(reviews));
}

let currentLocation: [string, string, number] = ['Skokie', '6:30PM', 45];
if (footer !== null) {
  footer.innerHTML =
    currentLocation[0] +
    ' ' +
    currentLocation[1] +
    ' ' +
    currentLocation[2] +
    'degrees';
}

class MainProperty {
  src: string;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let yourMainProperty = new MainProperty(
  'images/italian-property.jpeg',
  'Italian House',
  [
    {
      name: 'Olive',
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: '04-12-2021',
    },
  ]
);

console.log(yourMainProperty.src);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer!.appendChild(image);
