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
      const {name, value} = action.payload;
      return {...state, fields: { ...state.fields, [name]: value}};
    case 'RESET':
      return initialState
    case 'CHANGEEDIT': {
      const { id } = action.payload;
      return { ...state, edit: { isEdit: true, id }};
    }
    case 'DELETEEDIT':
      const { id } = action.payload;
      console.log('hhh')
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