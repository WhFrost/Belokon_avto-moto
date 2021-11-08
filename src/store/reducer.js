import {combineReducers} from 'redux';
import {popupReducer} from './popup-reducer';
import {reviewsReducer} from './reviews-reducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  reviews: reviewsReducer,
});

export {
  rootReducer
};
