import {useSelector, useDispatch} from 'react-redux'
import {remove, change, deleteEdit, changeEdit} from '../actions/actions';

export default function List() {
	const items = useSelector(state => state.List)
	const filter = useSelector((state) => state.Filter);
	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(remove(id))
		dispatch(deleteEdit(id))
	}

	const handleEdit = id => {
		const item = items.find((item) => item.id === id);
		dispatch(change('task', item.task))
		dispatch(change('price', item.price))
		dispatch(changeEdit(item.id))
	}

	return (
		<ul>
			{items.filter((item) => item.task.includes(filter)).map(el => (
				<li key={el.id} style={{display: "flex"}}>
					{el.task} - {el.price} 
					<div onClick={() => handleRemove(el.id)} style={{cursor: "pointer"}}>✘</div>
					<div onClick={() => handleEdit(el.id)} style={{cursor: "pointer"}}>✎</div>
				</li>
			))}
		</ul>
	)
} 