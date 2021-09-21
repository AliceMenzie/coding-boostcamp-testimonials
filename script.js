const btnPrev = document.querySelector(".btn-prev");
const btnNxt = document.querySelector(".btn-nxt");
const reviewers = document.querySelectorAll(".reviewer-img");
const reviews = document.querySelectorAll(".review-content");
const reviewerDetails = document.querySelectorAll(".reviewer-details");
console.log(reviewers);
let idx = 0;

function toggleReviewer() {
  reset()

  if (idx > reviewers.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = reviewers.length - 1;
  }

  reviewers[idx].classList.remove("hidden");
  reviews[idx].classList.remove("hidden");
  reviewerDetails[idx].classList.remove("hidden");
}

btnNxt.addEventListener("click", () => {
  idx++;
  toggleReviewer();
  
});

btnPrev.addEventListener("click", () => {
  idx--;
  toggleReviewer();
});

function reset() {
    reviewers.forEach((reviewer) => {
        reviewer.classList.add("hidden");
      });
    
      reviews.forEach((review) => {
        review.classList.add("hidden");
      });
    
      reviewerDetails.forEach((detail) => {
        detail.classList.add("hidden");
      });

}