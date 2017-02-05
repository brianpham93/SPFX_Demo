import {Store} from "redux"
import * as React from 'react'

export interface INameProp{
      last: string,
      first: string
}

export interface IVisibleContactListState extends React.Props<any>{
    contacts: Array<IContact>,
    romajiChar: string
}

export interface ISearchScreenState {
      contacts : Array < IContact >,
      romajiChar : string
}

export interface IGlobalState {
    contacts: Array<IContact>,
    alphabetChars: Array<IAlphabetChar>
}

export interface IProviderProps {
    store: Store<any>
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

export interface IAlphabetChar{
	romaji: string,
	hiragana: string
}

export interface IReducer{
	contacts: Array<IContact>,	
	chars: Array<IAlphabetChar>
}
