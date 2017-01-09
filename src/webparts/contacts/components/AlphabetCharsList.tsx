import * as React from "react"
import {AlphabetChars} from "../constants"
import {Link} from "react-router"
// import {Link} from "office-ui-fabric-react/lib/Link"

const AlphabetCharsList = ({alphabetChars}) => {
	return (
        <div>
          {
              alphabetChars.map((char) => 
              <div key={char.romaji}>
                <Link to={"/contacts/" + char.romaji}>{char.hiragana}/{char.romaji}</Link>
              {/*<Link href={"/contacts/" + char.romaji}>{char.hiragana}/{char.romaji}</Link>*/}
                <br/>
                </div>
              )
          }  
        </div>
	)
}

export default AlphabetCharsList