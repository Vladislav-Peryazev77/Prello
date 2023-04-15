import { observer } from "mobx-react-lite";

import { useStore } from "@/app/providers/withStore";

export const Counter = observer(() => {
  const { counter } = useStore();

  return (
    <div>
      <p>Total: {counter.total}</p>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
    </div>
  );
});
