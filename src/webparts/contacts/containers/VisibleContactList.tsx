import { connect } from "react-redux"
import * as React from "react"
// import ContactList from "../components/ContactList.jsx"
import {ContactList} from "../components"
import {getAllContacts,getContactsByFirstNameChar,getContactInfo} from "../actions"
import {IVisibleContactListState} from '../interfaces';

const getVisibleContacts = (contacts, char) => {

	switch (char == undefined){
	case true:	
		return contacts
	default:		
		return contacts.filter(t => t.name.first.indexOf(char) != -1)
	}		
}

const mapStateToProps = (state: IVisibleContactListState, ownProps) => {
	return {		
		contacts: getVisibleContacts(state.contacts,ownProps.romaji),
		romajiChar: ownProps.romaji
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

const VisibleContactList = ({contacts,romaji}) => (
	<div>
		<ContactList contacts={contacts}/>
	</div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleContactList)