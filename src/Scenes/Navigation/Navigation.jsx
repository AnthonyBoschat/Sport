import { useDispatch, useSelector } from "react-redux"
import CommonButton from "../../Components/CommonButton/CommonButton"
import "./Navigation.scss"
import { changeRoute } from "../../Slices/RouteSlice"

export default function Navigation(){

    const disaptch = useDispatch()
    const route = useSelector(store => store.route.current)

    const buttonsState = [
        {
            id:0,
            className:"headerButton",
            value:"Sport",
            click:() => disaptch(changeRoute("Sport")),
            selected:route === "Sport" ? true : false
        },
        {
            id:1,
            className:"headerButton",
            value:"Nutrition",
            click:() => disaptch(changeRoute("Nutrition")),
            selected:route === "Nutrition" ? true : false
        },
    ]

    

    return(
        <div className="navigation">
            {buttonsState.map(button => (
                <CommonButton
                    key={button.id}
                    {...button}
                />
            ))}
        </div>
    )
}