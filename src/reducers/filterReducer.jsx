const initial_state = '';

export default function filterReducer(state = initial_state, action) {
  switch (action.type) {
    case 'CHANGEFILTER':
      const { value } = action.payload;
      return value;
    default:
      return state;
  }
}