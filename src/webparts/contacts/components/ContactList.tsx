import * as React from "react"
import {List} from "office-ui-fabric-react/lib/List"
import {FocusZone, FocusZoneDirection} from "office-ui-fabric-react/lib/FocusZone"

const ContactList = ({contacts}) => {
	return (
        <FocusZone direction={FocusZoneDirection.vertical}>
            <List
                items={contacts}
                onRenderCell={(item) => (
                <div>
                    <p>{item.name.first} {item.name.last}</p>
                </div>
            )}
            />
        </FocusZone>
	)
}

export default ContactList