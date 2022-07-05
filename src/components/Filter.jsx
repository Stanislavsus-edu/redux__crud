import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../actions/actions";

export default function Filter() {
  const filter = useSelector((state) => state.Filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  }

  return (
    <div>
      Фильтр:
      <input name="filter" onChange={handleChange} value={filter} />
    </div>
  );
}