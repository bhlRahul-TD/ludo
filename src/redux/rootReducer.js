import {combineReducers} from 'redux';
import gameReducer from './reducers/gameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
