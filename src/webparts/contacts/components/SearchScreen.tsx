import * as React from "react"
import {SearchBox} from "office-ui-fabric-react/lib/SearchBox"
import {VisibleContactList} from "../containers"
import {ISearchScreenState} from '../interfaces'

const mapStateToProps = (state : ISearchScreenState, ownProps) => {
      return {
            contacts: state.contacts,
            romajiChar: ownProps.params.romaji
      }
}

const SearchScreen = ({contacts, romaji}) => (
      <div>
            <SearchBox/>
            <VisibleContactList contacts={contacts} romaji={romaji}/>
      </div>
)

export default SearchScreen