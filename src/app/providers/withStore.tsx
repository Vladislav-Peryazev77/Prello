import { ReactNode, createContext, useContext } from "react";
import { configure } from "mobx";
import { IS_DEVTOOLS } from "@/shared/config";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const store = {};

const RootStoreContext = createContext<typeof store>(store);

export const useStore = () => {
  return useContext<typeof store>(RootStoreContext);
};

export const withStore = (component: () => ReactNode) => () =>
  (
    <RootStoreContext.Provider value={store}>
      {component()}
    </RootStoreContext.Provider>
  );

if (IS_DEVTOOLS) {
  window._store_ = store;
}
