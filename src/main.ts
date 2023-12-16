const reviewTotalDisplay = document.querySelector('#reviews');

const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

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
const result = reviews.reduce((r, o) => (o.date > r.date ? o : r));

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? '⭐️' : '';
  if (reviewTotalDisplay !== null) {
    reviewTotalDisplay.innerHTML =
      'review total ' +
      value.toString() +
      '| last reviewer was' +
      reviewer +
      ' ' +
      iconDisplay;
  }
  console.log(iconDisplay);
}

showReviewTotal(reviews.length, result.name, result.loyaltyUser);

const you = {
  userName: 'Bobby',
  isReturning: true,
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay!.innerHTML = 'back';
  }
  userNameDisplay!.innerHTML = userName;
}

populateUser(you.isReturning, you.userName);
