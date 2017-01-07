import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import {Router, Route, browserHistory,IndexRoute} from "react-router"
import styles from '../Contacts.module.scss';
import { IContactsWebPartProps } from '../IContactsWebPartProps';
import AlphabetCharsList from './AlphabetCharsList';
import {AlphabetChars} from '../constants';

export interface IContactsProps extends IContactsWebPartProps {
  companyName: string  
}

export default class Contacts extends React.Component<IContactsProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.contacts}>      
          <h1>Choose alphabet</h1>
          <AlphabetCharsList alphabetChars={AlphabetChars}/>                
      </div>
    );
  }
}
