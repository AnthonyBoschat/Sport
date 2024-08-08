import { useEffect, useRef, useState } from "react"
import { formatMinute } from "../../../Services/TimeServices"
import "./Exercice.scss"

export default function Exercice(props){

    const informations = Object.entries(props.informations)

    const [exerciceOnModification, setExerciceOnModification] = useState(false)

    const saveExercice = () => {
        // TODO, sauevgarder l'exercice dans la base de donnée (test)
    }


    return(
        <div className="exercice">

            <div className="options">
                <i 
                    onClick={() => setExerciceOnModification(!exerciceOnModification)} 
                    class={`fa-solid fa-pen-to-square option ${exerciceOnModification ? "active" : ""}`}
                ></i>

                <i  onClick={saveExercice(informations)} 
                    class="fa-solid fa-floppy-disk option"
                ></i>
            </div>

            {informations.map(information => (
                <div key={`${information[0]} ${information[1]}`} className="information">
                    <div className="name">
                        {information[0]}
                    </div>
                    <input type="text"  className={`value ${exerciceOnModification ? "onModification" : "disabled"}`}
                        value={information[0] === "Repos" ? formatMinute(information[1])  : information[1]}
                    />
                </div>
                    
            ))}
            
        </div>
    )
}