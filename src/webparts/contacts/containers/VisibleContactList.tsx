import { connect } from "react-redux"
// import ContactList from "../components/ContactList.jsx"
import {ContactList} from "../components"
import {getAllContacts,getContactsByFirstNameChar,getContactInfo} from "../actions"

const getVisibleContacts = (contacts, fNameChar) => {

	switch (fNameChar == undefined){
	case true:	
		return contacts
	default:		
		return contacts.filter(t => t.name.first.indexOf(fNameChar) != -1)
	}		
}

const mapStateToProps = (state, ownProps) => {
	return {		
		contacts: getVisibleContacts(state.contacts,ownProps.romaji)
	}
}

const mapDispatchToProps = (dispatch) => ({
	getContactInfo: (id) => {
		dispatch(getContactInfo(id))
	},
	getContactsByFirstNameChar: (fNameChar) => {
		dispatch(getContactsByFirstNameChar(fNameChar))
	},
	getAllContacts: ()=> {
		dispatch(getAllContacts())
	}
})

const VisibleContactList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList)

export default VisibleContactList