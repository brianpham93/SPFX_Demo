import {ContactActions} from "../constants"

export const getAllContacts = () => ({
	type: ContactActions.GET_ALL_CONTACTS,    
})

export const getContactsByFirstNameChar = (character) => ({
	type: ContactActions.GET_ALL_CONTACTS_BY_CHARACTER,	
	character
})

export const getContactInfo = (id) =>  ({
	type: ContactActions.GET_CONTACT_INFO,
	id
})