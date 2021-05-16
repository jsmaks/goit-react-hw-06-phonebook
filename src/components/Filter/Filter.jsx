import { connect } from "react-redux";
import contactActions from "../../redux/phonebook/phonebook-actions";
const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(contactActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
