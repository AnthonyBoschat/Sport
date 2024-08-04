import { useSelector } from "react-redux"
import "./App.scss"
import Navigation from "./Scenes/Navigation/Navigation"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import Sport from "./Scenes/Sport/Sport";

export default function App() {

  const route = useSelector(store => store.route.current)
  const navigate = useNavigate()


  useEffect(() => {
    if(route){
      switch(route){
        case"Sport":
          navigate("/Sport")
          return

        case "Nutrition":
          navigate("/Nutrition")
          return

        default:
          return
      }
    }else{
      navigate("/")
    }
  }, [route])



  return (
    <main>
      <Navigation/>


      <Routes>
        <Route exact path="/" element=""/>
        <Route exact path="/Sport" element={<Sport/>}/>
        <Route path="/Nutrition" element="Nutrition"/>
      </Routes>
    </main>
  )
}
