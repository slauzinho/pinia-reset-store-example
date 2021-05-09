<template>
  <h1>{{ counter }}</h1>
  <div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useCounter from './stores/counter';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const counterStore = useCounter();
    const increment = () => counterStore.increment();
    const decrement = () => counterStore.decrement();
    const reset = () => counterStore.$reset();

    const counter = computed(() => counterStore.counter.currentNumber);

    return {
      increment,
      decrement,
      reset,
      counter,
    };
  },
});
</script>
