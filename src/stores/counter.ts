import { defineStore } from 'pinia';

export const counterInitialState = {
  counter: {
    currentNumber: 0,
  },
};

const useCounter = defineStore({
  id: 'counterStore',
  state: () => counterInitialState,
  actions: {
    increment() {
      this.counter.currentNumber++;
    },
    decrement() {
      this.counter.currentNumber--;
    },
  },
});

export default useCounter;
