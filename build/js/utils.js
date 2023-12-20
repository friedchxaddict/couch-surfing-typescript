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
