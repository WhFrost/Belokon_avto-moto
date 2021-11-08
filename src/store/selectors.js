const getReviews = (state) => state.reviews.reviews;

const getPopupViewStatus = (state) => state.popup.viewStatus;
const getReviewAuthor = (state) => state.popup.name;
const getAdvantages = (state) => state.popup.advantages;
const getDisadvantages = (state) => state.popup.disadvantages;
const getRating = (state) => state.popup.rating;
const getComment = (state) => state.popup.comment;

export {
  getReviews,
  getPopupViewStatus,
  getReviewAuthor,
  getAdvantages,
  getDisadvantages,
  getRating,
  getComment
};
