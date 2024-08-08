import { useEffect, useRef, useState } from "react"
import { formatMinute } from "../../../Services/TimeServices"
import "./Exercice.scss"

export default function Exercice(props){

    const informations = props.informations

    const [exerciceOnModification, setExerciceOnModification] = useState(false)

    const saveExercice = () => {
        // TODO, sauevgarder l'exercice dans la base de donnée (test)
        console.log("sauvegarde de l'exercice : ", informations.nom)
    }


    return(
        <div className="exercice">

            <div className="options">
                <i 
                    onClick={() => setExerciceOnModification(!exerciceOnModification)} 
                    class={`fa-solid fa-pen-to-square option ${exerciceOnModification ? "active" : ""}`}
                ></i>

                <i  onClick={() => saveExercice()} 
                    class="fa-solid fa-floppy-disk option"
                ></i>
            </div>

            
            <div className="information">
                <div className="name">
                    Nom
                </div>
                <input type="text"  className={`value ${exerciceOnModification ? "onModification" : "disabled"}`}
                    value={informations.nom}
                />
            </div>
            <div className="information">
                <div className="name">
                    Séries
                </div>
                <input type="text"  className={`value ${exerciceOnModification ? "onModification" : "disabled"}`}
                    value={informations.series}
                />
            </div>
            <div className="information">
                <div className="name">
                    Répétitions
                </div>
                <input type="text"  className={`value ${exerciceOnModification ? "onModification" : "disabled"}`}
                    value={informations.repetitions}
                />
            </div>
            <div className="information">
                <div className="name">
                    Repos
                </div>
                <input type="text"  className={`value ${exerciceOnModification ? "onModification" : "disabled"}`}
                    value={formatMinute(informations.repos)}
                />
            </div>
                    
            
            
        </div>
    )
}