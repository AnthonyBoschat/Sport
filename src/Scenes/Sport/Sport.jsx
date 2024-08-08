import { useEffect, useState } from "react"
import "./Sport.scss"
import CommonButton from "../../Components/CommonButton/CommonButton"
import Exercice from "./Exercice/Exercice"
import NewExercice from "./newExercice/NewExercice"
import { useQuery } from "@apollo/client"
import { GET_ALL_EXERCICES } from "../../Query/Exercices/GetAll"

export default function Sport(){

    const [daySelected, setDaySelected] = useState(null)
    const {loading, error, data} = useQuery(GET_ALL_EXERCICES)
    
    useEffect(() => {
        console.log("loading", loading)
        console.log("error", error)
        console.log("data", data)
    }, [loading])

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

                            {/* <NewExercice/> */}


                            {!loading && (
                                data.allExercices.map(exercice => (
                                    <Exercice
                                        key={exercice.id} 
                                        informations={exercice}
                                        
                                    />
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}