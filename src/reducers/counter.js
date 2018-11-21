export default (state, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return {
        ...state,
        count: state.count < 1 ? 0 : state.count - 1
      };
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };
    default:
      return {
        ...state
      };
  }
};