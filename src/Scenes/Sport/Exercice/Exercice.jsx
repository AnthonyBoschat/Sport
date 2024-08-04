import { formatMinute } from "../../../Services/TimeServices"
import "./Exercice.scss"

export default function Exercice(props){

    const informations = Object.entries(props)

    return(
        <div className="exercice">

            {informations.map(information => (
                <div key={`${information[0]} ${information[1]}`} className="information">
                    <div className="name">
                        {information[0]}
                    </div>
                    <div className="value">
                        {information[0] === "repos" ? formatMinute(information[1])  : information[1]}
                    </div>
                </div>
            ))}
            
        </div>
    )
}