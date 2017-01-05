import {SearchActions} from "../constants"

export const searchContact = (character, searchString) => ({
	type: SearchActions.SEARCH_CONTACT,
	character,
	searchString
})