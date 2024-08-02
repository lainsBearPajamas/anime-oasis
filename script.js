//First we need to create and store all the reviews in an array of objects that have a property called content, which contains all the HTML code for the review. Then we need to assign each review icon in the header an event listener through document.querySelectorAll() with it's index as a parameter given to a function. The function should find the main element and change it's inner HTML to the review's content. To do so we need to loop through all the reviews with an i until we find an element for which the i matches the index passed into the function from the button we clicked. 

import { reviews } from "./data/reviews.js";

const headerImageArray = document.querySelectorAll('.js-header-image');
headerImageArray.forEach ((element, index) => {
  element.addEventListener('click', () => {
    renderReview (index);
  })
})
function renderReview(index) {
  let reviewContent
  for (let i = 0; i < reviews.length; i++) {
    if (i === index) {
      reviewContent = reviews[i].content;
    }
  }
  const mainElement = document.querySelector('main');

  mainElement.classList.add('zero-opacity');
  mainElement.classList.remove('full-opacity');
  setTimeout(() => {
    mainElement.classList.remove('zero-opacity');
    mainElement.classList.add('full-opacity');
  }, 1)
  mainElement.innerHTML = reviewContent;

}