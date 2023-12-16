const reviewTotalDisplay = document.querySelector('#reviews');

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
    loyaltyUser: false,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
  },
];

function showReviewTotal(value: number) {
  const result = reviews.reduce((r, o) => (o.date > r.date ? o : r));
  if (reviewTotalDisplay !== null) {
    reviewTotalDisplay.innerHTML =
      'review total ' + value.toString() + '| last reviewed by' + result.name;
  }
}

showReviewTotal(reviews.length);
