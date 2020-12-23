import { INCREASE, DECREASE } from "../_action/type";

const initialState = 0; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
      break;
    case DECREASE:
      return state - 1;
      break;
    default:
      return state;
  }
}

//  counter;
