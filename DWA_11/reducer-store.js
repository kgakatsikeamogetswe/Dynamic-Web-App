/**
 * Represents the initial state of the application
 * @typedef {Object} InitialState
 * @property {number} number - The initial value of the number.
 */

/**
 * Represents the action type for the reducer.
 * @typedef {Object} Action
 * @property {string} actionType - The type of action.
 */

/**
 * @typedef {function} reducer
 * @param {InitialState} state - The current state of the application.
 * @param {Action} action - The action to be executed.
 * @returns {InitialState} The new state after the action has been executed.
 */

/**
 * Represents the store and holds the state and provides methods to interact with it.
 * @typedef {Object} Store
 * @property {InitialState} state - The current state of the application.
 * @property {Array} listeners 
 * @property {function} getState - A function to get the current state.
 * @property {function} dispatch - A funtion to dispatch an action and update the state.
 * @property {function} subscribe - A function to subscribe a listener function to the state changes.
 */

/**
 * The initial state of the application.
 * @type {InitialState}
 */
export const initialState = {
    number: 0,
  };
  
  /**
   * The reducer function that handles the state changes
   * @type {reducer}
   */
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          number: state.number + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          number: state.number - 1
        };
      case 'RESET':
        return {
          ...state,
          number: 0
        };
      default:
        return state;
    }
  };
  
  /**
   * The store that holds the state and provides methods to interact with it.
   * @type {Store}
   */
  export const store = {
    state: initialState,
    listeners: [],
  
    /**
     * Gets the current state of the application.
     * @returns {InitialState} The current state.
     */
    getState() {
      return store.state;
    },
  
    /**
     * Dispatches an action and updates the state.
     * @param {Action} action - The action to be performed.
     */
    dispatch(action) {
      store.state = reducer(store.state, action);
      store.listeners.forEach(listener => listener(store.state));
    },
  
    /**
     * Subscribes a listener function to state changes.
     * @param {function} listener 
     */
     subscribe(listener) {
      store.listeners.push(listener);
    },
  };

  /**
     * Logs the updated state to the console.
     * @param {InitialState} state - The updated state.
     */
  store.subscribe ((state) => {
    console.log('Upadated state: ', state);
  });
  