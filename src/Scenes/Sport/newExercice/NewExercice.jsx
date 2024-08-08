import { useState } from "react"
import "./NewExercice.scss"

export default function NewExercice(){

    const [fields, setFields] = useState([
        {id:1, name:"Nom", value:"", type:"string"},
        {id:2, name:"Séries", value:"", type:"int"},
        {id:3, name:"Répétitions", value:"", type:"int"},
        {id:4, name:"Repos", value:"", type:"int"},
    ])

    const handleChange = (fieldID, event) => {
        
        setFields(fields => {
            const updatedFields = [...fields]
            const fieldIndex = updatedFields.findIndex(field => field.id === fieldID)
            if(updatedFields[fieldIndex].type === "int"){
                updatedFields[fieldIndex].value = parseInt(event.target.value)
            }else{
                updatedFields[fieldIndex].value = event.target.value
            }
            console.log(updatedFields)
            return updatedFields
        })
    }

    const saveExercice = () => {
        console.log("Sauvegarde de l'exercice")
        console.log(fields)
    }


    return(
        <div className="exercice">


            <div className="options">
                <i  onClick={saveExercice} 
                    className="fa-solid fa-floppy-disk option"
                ></i>
            </div>
            {fields.map(field => (
                <div key={field.id} className="information">
                    <div className="name">
                        {field.name}
                    </div>
                    <input type="text" onChange={(e) => handleChange(field.id, e)}  className={`value onModification`}
                        value={field.value}
                    />
                </div>
            ))}
        </div>
        
    )
}