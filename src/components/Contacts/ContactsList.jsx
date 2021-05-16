import "./Contacts.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactActions from "../../redux/phonebook/phonebook-actions";

const Contacts = ({ libraryContacts, onDelete }) => {
  return (
    <div>
      <ul className="contacts__list">
        {libraryContacts.map((el) => (
          <li className="contacts__item" key={el.id}>
            <p className="contact__name">
              {el.name}:<span className="contact__tel">{el.number}</span>
            </p>
            <button className="btn btn-delete" onClick={() => onDelete(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  onDelete: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  libraryContacts: getVisibleContacts(items, filter),
});

const mapDisptachToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDisptachToProps)(Contacts);
//--------------------------------------------------------------------
// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;

//   const visibleContacts = getVisibleContacts(items, filter);

//   return {
//     libraryContacts: visibleContacts,
//   };
// };
