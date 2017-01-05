import contacts from "./contacts"
import alphabetChars from "./alphabetChars"

import {combineReducers, Reducer} from "redux"

export interface INameProp{
      last: string,
      first: string
}

export interface IContact{
      registered: string,
      address: string,
      phone: string,
      email: string,
      company: string,
      name: INameProp
      age: number
      picture: string,
      id: string
}

export interface IChar{
	romaji: string,
	hiragana: string
}

export interface IReducer{
	contacts: Array<IContact>,	
	chars: Array<IChar>
}

export const rootReducer: Reducer<IReducer> = combineReducers<IReducer>({
		
})

