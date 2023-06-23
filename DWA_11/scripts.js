const MAX_NUMBER = 10;
const MIN_NUMBER = 0;

import { initialState, reducer, store  } from "./reducer-store.js";

const html = {
  keys: {
    add: document.querySelector('[data-key="add"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    number: document.querySelector('[data-key="number"]'),
    reset: document.querySelector('[data-key="reset"]'),
  },
};

// const initialState = {
//   number: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         number: state.number + 1
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         number: state.number - 1
//       };
//     case 'RESET':
//       return {
//         ...state,
//         number: 0
//       };
//     default:
//       return state;
//   }
// };

// const store = {
//   state: initialState,
//   listeners: [],

//   getState() {
//     return store.state;
//   },

//   dispatch(action) {
//     store.state = reducer(store.state, action);
//     store.listeners.forEach(listener => listener(store.state));
//   },

//    subscribe(listener) {
//     store.listeners.push(listener);
//   },
// };

// store.subscribe ((state) => {
//   console.log('Upadated state: ', state);
// });

const subtractHandler = () => {
  let newValue = parseInt(html.keys.number.value) - 1;
  if (newValue <= MIN_NUMBER) {
    newValue = MIN_NUMBER;
    html.keys.subtract.disabled = true;
  } else {
    html.keys.add.disabled = false;
  }
  html.keys.number.value = newValue;

  store.dispatch({type: 'DECREMENT'});
};

const addHandler = () => {
  let newValue = parseInt(html.keys.number.value) + 1;
  if (newValue >= MAX_NUMBER) {
    newValue = MAX_NUMBER;
    html.keys.add.disabled = true;
  } else {
    html.keys.subtract.disabled = false;
  }
  html.keys.number.value = newValue;

  store.dispatch({type: 'INCREMENT'});
};

// const resetHandler = document.querySelector('[data-key=reset]'); 

html.keys.subtract.addEventListener('click', subtractHandler)


html.keys.add.addEventListener('click', addHandler)


html.keys.reset.addEventListener('click', () => {
  store.dispatch({type: 'RESET'});
  alert('you have reset the counter to 0');
  html.keys.number.value = 0;
});





