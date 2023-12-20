const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
import { LoyaltyUser } from './enum.js';
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐️' : '';
    if (reviewTotalDisplay !== null) {
        reviewTotalDisplay.innerHTML =
            'review total ' +
                value.toString() +
                '| last reviewer was' +
                reviewer +
                ' ' +
                iconDisplay;
    }
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function add(firstValue, secondValue) {
    let result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition');
    }
}
const combinedReviews = add(5, 1);
const firstNameLastName = add('Ania', 'Kubow');
