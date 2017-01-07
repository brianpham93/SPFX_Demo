import {AlphabetChars, FNameActions} from "../constants"

export default (state = AlphabetChars, action) => {
    var char;
	switch (action.type) {
	case action.type == FNameActions.SET_FNAME_1ST_CHAR:
		if (action.char == undefined || action.char == "") {
			return state
		}
        char = state.filter(t => t.hiragana == action.char)
		return char
	default:
		return state
	}
}