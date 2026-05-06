import { useReducer, type Dispatch } from "react";

type CounterState = {
  count: number;
  step: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET"; to?: number };
const init = (initialCount: number): CounterState => {
  return { count: initialCount, step: 1 };
};

const CounterReduced = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };

    case "DECREMENT":
      return { ...state, count: state.count - state.step };

    case "RESET":
      return { ...state, count: action.to ?? 0 };

    default:
      return state;
  }
};

export const TypeReducer = ({ initial = 0 }: { initial?: number }) => {
  const [state, dispatch] = useReducer(CounterReduced, initial, init);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET", to: 10 })}>Reset</button>
    </div>
  );
};

type CounterDispatch = Dispatch<Action>;

const SmallChild = ({ dispatch }: { dispatch: CounterDispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        click from child component
      </button>
    </div>
  );
};
