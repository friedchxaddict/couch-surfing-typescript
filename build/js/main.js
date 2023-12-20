import { showReviewTotal, populateUser } from './utils.js';
import { Permissions, LoyaltyUser } from './enum.js';
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');
let isLoggedIn;
const reviews = [
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
const properties = [
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
];
showReviewTotal(reviews.length, result.name, result.loyaltyUser);
populateUser(you.isReturning, you.firstName);
let authorityStatus;
isLoggedIn = true;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer === null || propertyContainer === void 0 ? void 0 : propertyContainer.appendChild(card);
    showDetails(isLoggedIn /* or you.permissions */, card, properties[i].price);
}
let currentLocation = ['Skokie', '6:30PM', 45];
if (footer !== null) {
    footer.innerHTML =
        currentLocation[0] +
            ' ' +
            currentLocation[1] +
            ' ' +
            currentLocation[2] +
            'degrees';
}
