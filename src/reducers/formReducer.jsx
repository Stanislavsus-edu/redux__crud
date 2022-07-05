const initialState = {
  fields: {
    task: '',
    price: '',
  },
  edit: {
    isEdit: false,
    id: '',
  }
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
      const {task, price} = action.payload;
      return {...state, fields: { ...state.fields, [task]: price}};
    case 'RESET':
      return initialState
    case 'CHANGEEDIT': {
      const { id } = action.payload;
      return { ...state, edit: { isEdit: true, id }};
    }
    case 'DELETEEDIT':
      const { id } = action.payload;
      if (id === state.edit.id) {
        return { ...state, edit: { isEdit: false, id: '' } };
      } 
      else {
        return state;
      }
    default:
      return state;
  }
}