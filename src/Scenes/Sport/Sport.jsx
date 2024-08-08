import { useState } from "react"
import "./Sport.scss"
import CommonButton from "../../Components/CommonButton/CommonButton"
import Exercice from "./Exercice/Exercice"
import NewExercice from "./newExercice/NewExercice"

export default function Sport(){

    const [daySelected, setDaySelected] = useState(null)

    

    const selectDay = (day) => {
        setDaySelected(day === daySelected ? null : day)
    }

    const days = [
        {
            className:"Sport_dayButton",
            value:"Lundi",
            click:() => selectDay("Lundi"),
            selected:daySelected === "Lundi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Mardi",
            click:() => selectDay("Mardi"),
            selected:daySelected === "Mardi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Mercredi",
            click:() => selectDay("Mercredi"),
            selected:daySelected === "Mercredi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Jeudi",
            click:() => selectDay("Jeudi"),
            selected:daySelected === "Jeudi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Vendredi",
            click:() => selectDay("Vendredi"),
            selected:daySelected === "Vendredi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Samedi",
            click:() => selectDay("Samedi"),
            selected:daySelected === "Samedi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Dimanche",
            click:() => selectDay("Dimanche"),
            selected: daySelected === "Dimanche" ? true : false
        },
    ]



    const exercices = [
        {
            data:{
                Nom:"Développer coucher",
                Séries:3,
                Répétitions:8,
                Repos:90
            }
        },
        {
            data:{
                Nom:"Ecarter haltère",
                Séries:4,
                Répétitions:10,
                Repos:60
            }
        },
    ]



    


    return(
        <div className="containerSport">

            <div className="containerDay">
                {days.map(day => (
                    <CommonButton
                        key={day.value}
                        {...day}
                    />
                ))}
                <div className="separator"></div>
            </div>



            
            <div className="containerExercices">
                {daySelected && (
                    <div className="layout">
                        <div className="header">
                            <button className="add">Ajouter un exercice</button>
                        </div>
                        <div className="exerciceList">

                            <NewExercice/>


                            {/* {exercices.map(exercice => (
                                <Exercice
                                    key={exercice.Nom} 
                                    informations={exercice.data}
                                    
                                />
                            ))} */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}