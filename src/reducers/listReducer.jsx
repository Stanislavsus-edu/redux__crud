import {nanoid} from 'nanoid';

const initialState = [
  {id: nanoid(), task: 'Замена стекла', price: 210},
];

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      const {task, price} = action.payload;
      return [...state, {id: nanoid(), task, price}];
    }
     case 'EDIT': {
      const { id, task, price } = action.payload;
      return state.map(service => service.id === id ? { ...service, task, price } : service);
    }
    case 'REMOVE': {
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    }
    default:
      return state;
  }
}