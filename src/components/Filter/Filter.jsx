// import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { setFilter } from '../../redux/filterSlice';

export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
//  const filter = useSelector(state => state.filter);

 const onFilterChange  = (event) => {
    dispatch(setFilter(event.target.value))
  };

    return (
        <LabelFilter>
            Find contacts by name
            <InputFilter
                type="text"
                name="filter"
                placeholder="Enter contact"
                value={filter}
                onChange={onFilterChange}
            />
        </LabelFilter>
    );
}


// export default function Filter({ value, onChange }) {
//     return (
//         <LabelFilter>
//             Find contacts by name
//             <InputFilter
//                 type="text"
//                 placeholder="Enter contact"
//                 value={value}
//                 onChange={onChange}
//             />
//         </LabelFilter>
//     );
// }

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };