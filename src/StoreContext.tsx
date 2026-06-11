import { createContext, ReactNode, useContext } from "react";
import { RootStore } from "./models/RootStore";

const StoreContext = createContext<RootStore | null>(null);

export function StoreProvider(props: { store: RootStore; children: ReactNode }) {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>;
}

/** access the application models; must be used below a StoreProvider */
export function useStores(): RootStore {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return store;
}
