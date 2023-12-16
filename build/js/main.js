"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const reviews = [
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
const you = {
    firstName: 'Bobby',
    lastName: 'Womack',
    isReturning: true,
    age: 45,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};
const result = reviews.reduce((r, o) => (o.date > r.date ? o : r));
(0, utils_1.showReviewTotal)(reviews.length, result.name, result.loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
