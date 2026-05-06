import { useState } from "react";

// for string | number | boolean no generic needed -> its infered automatically
export const Counter = () => {
  const [count, setCount] = useState(0); // infered as number

  return <div>{count}</div>;
};

// loader state -> idle | loading | success | error

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

type User = {
  name: string;
};

export const heavyDefault = (): number => {
  return 100;
};
export const LoaderDemo = () => {
  const [state, setState] = useState<LoadState>({ status: "idle" });
  const [n, setN] = useState<number>(() => heavyDefault());

  const [user, setUser] = useState<User | null>(null); // don't init only with null -> init like this

  async function fetchData() {
    setState({ status: "loading" });

    // mock api call

    setState({ status: "success", data: "successfully fetched!" });

    // catch
    setState({ status: "error", message: "something went wrong" });
  }

  return <div>Loader</div>;
};
