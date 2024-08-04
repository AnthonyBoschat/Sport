import { useState } from "react"
import "./Sport.scss"
import CommonButton from "../../Components/CommonButton/CommonButton"

export default function Sport(){

    const [daySelected, setDaySelected] = useState(null)

    const days = [
        {
            className:"Sport_dayButton",
            value:"Lundi",
            click:() => setDaySelected("Lundi"),
            selected:daySelected === "Lundi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Mardi",
            click:() => setDaySelected("Mardi"),
            selected:daySelected === "Mardi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Mercredi",
            click:() => setDaySelected("Mercredi"),
            selected:daySelected === "Mercredi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Jeudi",
            click:() => setDaySelected("Jeudi"),
            selected:daySelected === "Jeudi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Vendredi",
            click:() => setDaySelected("Vendredi"),
            selected:daySelected === "Vendredi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Samedi",
            click:() => setDaySelected("Samedi"),
            selected:daySelected === "Samedi" ? true : false
        },
        {
            className:"Sport_dayButton",
            value:"Dimanche",
            click:() => setDaySelected("Dimanche"),
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
            </div>
            <div className="containerExercices">
                <h1>{daySelected}</h1>
            </div>
        </div>
    )
}