import {ContactActions} from "../constants"

export default (state = [] , action) => {	
	var contacts
	switch(action.type){

	case action.type == ContactActions.GET_ALL_CONTACTS_BY_CHARACTER:
		contacts = state.filter(t => t.name.first.indexOf(action.character) == 0)
		return contacts

	case action.type == ContactActions.GET_ALL_CONTACTS: 		
		contacts = state
		return contacts

	case action.type == ContactActions.GET_CONTACT_INFO:
		contacts = state.filter(t => t.id == action.id)
		return contacts
	
	default: return state
	}
}