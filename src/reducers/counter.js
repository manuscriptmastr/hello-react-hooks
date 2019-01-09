const backgroundColors = ['aqua', 'orange', 'greenyellow', 'pink'];
const newColor = () => backgroundColors[Math.round(Math.random() * (backgroundColors.length - 1))];

export default (state, action) => {
  switch (action.type) {
    case 'COLOR':
      return {
        ...state,
        backgroundColor: newColor()
      }
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