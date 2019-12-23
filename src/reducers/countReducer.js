import {ACTION_DECREMENT, ACTION_INCREMENT} from "../actions/countActions";

const defaultState = {
  count: 0
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return Object.assign({}, state, {count: state.count + 1});
    case ACTION_DECREMENT:
      return Object.assign({}, state, {count: state.count - 1});
    default:
      return state;
  }
};