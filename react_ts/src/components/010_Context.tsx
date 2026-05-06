import { createContext, useContext, useState, type ReactNode } from "react";

export type GlobalState = {
  flag: string;
  setFlag: (c: string) => void;
};

export const MyGlobalContext = createContext<GlobalState>({
  flag: "Hello World",
  setFlag: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

export function GlobalState({ children }: { children: ReactNode }) {
  const [flag, setFlag] = useState("");
  return (
    <MyGlobalContext.Provider value={{ flag, setFlag }}>
      {children}
    </MyGlobalContext.Provider>
  );
}
