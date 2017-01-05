import {FNameActions} from "../constants"

export const getAllFName1stChar = () => ({
	type: FNameActions.GET_ALL_FNAME_1ST_CHAR
})

export const setFName1stChar = (char) =>({
	type: FNameActions.SET_FNAME_1ST_CHAR,
	char
})