const ActionType = {
  ADD_REVIEW: 'review/addReview',
  SET_VIEW_STATUS: 'popup/viewStatusSet',
  SET_REVIEW_AUTHOR: 'popup/nameSet',
  SET_ADVANTAGES: 'popup/advantagesSet',
  SET_DISADVANTAGES: 'popup/disadvantagesSet',
  SET_RATING: 'popup/ratingSet',
  SET_COMMENT: 'popup/commentSet',
  CLEAR_DATA: 'popup/clearData',
};

const ActionCreator = {
  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review,
  }),
  setPopupViewStatus: (status) => ({
    type: ActionType.SET_VIEW_STATUS,
    payload: status,
  }),
  setReviewAuthor: (name) => ({
    type: ActionType.SET_REVIEW_AUTHOR,
    payload: name,
  }),
  setAdvantages: (advantages) => ({
    type: ActionType.SET_ADVANTAGES,
    payload: advantages,
  }),
  setDisadvantages: (disadvantages) => ({
    type: ActionType.SET_DISADVANTAGES,
    payload: disadvantages,
  }),
  setRating: (rating) => ({
    type: ActionType.SET_RATING,
    payload: rating,
  }),
  setComment: (comment) => ({
    type: ActionType.SET_COMMENT,
    payload: comment,
  }),
  clearData: () => ({
    type: ActionType.CLEAR_DATA,
  }),
};

export {
  ActionType,
  ActionCreator
};
