import contacts from "./contacts"
import alphabetChars from "./alphabetChars"

import {combineReducers, Reducer} from "redux"
import {IReducer} from '../interfaces';

export const rootReducer: Reducer<IReducer> = combineReducers<IReducer>({
      contacts,
      alphabetChars
})