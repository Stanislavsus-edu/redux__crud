export function add(task, price) {
  return {type: 'ADD', payload: {task, price}};
}

export function remove(id) {
  return {type: 'REMOVE', payload: {id}};
}

export function editer(id, task, price) {
  return {type: 'EDIT', payload: {id, task, price}};
}

export function reset() {
  return {type: 'RESET'};
}

export function change(task, price) {
  return {type: 'CHANGE', payload: {task, price}}
}

export function changeFilter(value) {
  return {type: 'CHANGEFILTER', payload: {value}}
}

export function changeEdit(id) {
  return { type: 'CHANGEEDIT', payload: { id } };
}

export function deleteEdit(id) {
  return { type: 'DELETEEDIT', payload: { id } };
}

