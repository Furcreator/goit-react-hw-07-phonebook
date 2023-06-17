import { Formik } from 'formik';
import { InpSearch, WrapSearch } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(editFilter(e.currentTarget.value));
  };
  return (
    <Formik>
      <WrapSearch>
        <InpSearch
          placeholder="Search Contact"
          onChange={handleChangeFilter}
          value={value}
        />
      </WrapSearch>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  value: PropTypes.string,
};
