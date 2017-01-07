import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Router, Route, browserHistory,IndexRoute, createMemoryHistory} from "react-router"
import {Provider} from "react-redux"
import * as createLogger from "redux-logger"
import {createStore, applyMiddleware} from 'redux';
import {ContactList, SearchScreen} from './components';

import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'contactsStrings';
import {AlphabetScreen} from './components';
import { IContactsWebPartProps } from './IContactsWebPartProps';
import {rootReducer} from "./reducers"
import {DumpContactList, AlphabetChars} from "./constants"
import {IGlobalState, IProviderProps} from './interfaces';

let initalState:IGlobalState = {
	contacts: DumpContactList,
	alphabetChars: AlphabetChars
}

let logger = createLogger()
let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
let store = createStoreWithMiddleware(rootReducer, initalState)
let history = createMemoryHistory()

export default class ContactsWebPart extends BaseClientSideWebPart<IContactsWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  // public render(){
  //   return (
  //     <Provider store={store}>
  //       <Router history={browserHistory}>
  //             <Route path="/" component={AlphabetScreen}>                                
  //                 <IndexRoute component={AlphabetScreen}/>
  //             </Route>            
  //             <Route>                
  //                 <IndexRoute component={SearchScreen}/>
  //                 <Route path="contacts/(:char)" component={SearchScreen}/>
  //             </Route>
  //         </Router>    
  //     </Provider>, this.domElement
  //   )
  // }
   public render(){
    const element = (<Provider store={store}>
         <Router history={history}>
              <Route path="/" component={AlphabetScreen}>                                
                   <IndexRoute component={AlphabetScreen}/>
              </Route>            
              <Route>                
                  <IndexRoute component={SearchScreen}/>
                  <Route path="/contacts/(:char)" component={SearchScreen}/>
              </Route>
         </Router>    
      </Provider>)

    ReactDom.render(element, this.domElement)
  }
  // public render(): void {    
  //   const element: React.ReactElement<IProviderProps> = React.createElement(Provider, {
  //     store
  //   });

  //   ReactDom.render(element, this.domElement);
  // }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
