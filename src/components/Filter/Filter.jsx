import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={e => onFilter(e)} />
    </Label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
