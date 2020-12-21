import { createStore } from 'vuex';
import axios from 'axios';

const databaseUrl = 'https://moshiro-edd9a-default-rtdb.europe-west1.firebasedatabase.app/beginner-cards.json';

export interface State {
  count: number;
  cards: any;
}

const store = createStore<State>({
  state() {
    return {
      count: 0,
      cards: null,
    };
  },
  mutations: {
    increment(state: State) {
      state.count += 1;
    },
    decrement(state: State) {
      state.count -= 1;
    },
    setCards(state: State, payload) {
      state.cards = payload;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    },
    async fetchCards(context) {
      try {
        const response = await axios.get(databaseUrl);
        console.log(response);
        context.commit('setCards', response);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    count(state: State) {
      return state.count;
    },
  },
});

export default store;
