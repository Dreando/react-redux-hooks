export const ACTION_INCREMENT = "INCREMENT";
export const ACTION_DECREMENT = "DECREMENT";

export const incrementAction = () => {
  return {
    type: ACTION_INCREMENT
  }
};

export const decrementAction = () => {
  return {
    type: ACTION_DECREMENT
  }
};