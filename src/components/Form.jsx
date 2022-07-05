import {useDispatch, useSelector} from 'react-redux'
import {add, change, editer, reset} from '../actions/actions';

export default function Form() {
	const { fields: item, edit } = useSelector(state => state.Form);
	const dispatch = useDispatch()

	const handleChange = evt => {
		const {name, value} = evt.target
		dispatch(change(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		if (edit.isEdit) {
			dispatch(editer(edit.id, item.task, item.price))
		}
		else {
			dispatch(add(item.task, item.price))
		}
		dispatch(reset())
	}

	const handleCancel = () => {
    	dispatch(reset());
  	}

	return (
		<form>
			<input type="text" name='task' placeholder="task" onChange={handleChange} value={item.task}/>
			<input type="number" name='price' placeholder="price" onChange={handleChange} value={item.price}/>
			<button onClick={handleSubmit}>Save</button>
			{edit.isEdit && <button onClick={handleCancel}>Cancel</button>}
		</form>
	)
}