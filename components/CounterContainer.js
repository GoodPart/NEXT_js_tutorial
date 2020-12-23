import React from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/_action/counter_action";

function CounterContainer() {
  const number = useSelector((state) => state.counter_reducer);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
