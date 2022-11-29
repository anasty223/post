import s from "./Filter.module.css"
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/action";
import { getFilter } from "../../redux/items-selector";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <label className={s.filterLabel}>
      <h3 className={s.headerFilter}>  Find post by title</h3>
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};
export default Filter;

// Filter.propTypes = {
//   // value: PropTypes.string,
//   // onChange: PropTypes.func.isRequired,
// };
