import {ActionType} from './action';

const localStoragePopupReviewData = localStorage.getItem('popupReviewData')
  ? JSON.parse(localStorage.getItem('popupReviewData'))
  : null;
const initialState = localStoragePopupReviewData
  ? {
    viewStatus: false,
    name: localStoragePopupReviewData.name,
    advantages: localStoragePopupReviewData.advantages,
    disadvantages: localStoragePopupReviewData.disadvantages,
    rating: localStoragePopupReviewData.rating,
    comment: localStoragePopupReviewData.comment,
  }
  : {
    viewStatus: false,
    name: '',
    advantages: '',
    disadvantages: '',
    rating: 0,
    comment: '',
  };

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_VIEW_STATUS:
      return {
        ...state,
        viewStatus: action.payload,
      };
    case ActionType.SET_REVIEW_AUTHOR:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.SET_ADVANTAGES:
      return {
        ...state,
        advantages: action.payload,
      };
    case ActionType.SET_DISADVANTAGES:
      return {
        ...state,
        disadvantages: action.payload,
      };
    case ActionType.SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ActionType.SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case ActionType.CLEAR_DATA:
      return {
        ...state,
        viewStatus: false,
        name: '',
        advantages: '',
        disadvantages: '',
        rating: 0,
        comment: '',
      };
    default:
      return state;
  }
};

export {
  popupReducer
};
