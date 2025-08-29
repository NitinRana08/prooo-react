import { create } from "zustand";

type CounterStoreState = {
  count: number;
  count2: number;
  count3: number;
};

export const useCounterStore = create<CounterStoreState>(() => ({
  count: 0,
  count2: 1,
  count3: 2,
}));
