import "./Accueil.css"
import Eve from "../../Component/Eve/Eve.jsx"
import NavBar from "../../Component/NavBar/NavBar"
import Main from "../../Component/Main/Main"
import Main2 from "../../Component/Main2/Main2"
import Qus from "../../Component/Qus/Qus.jsx"
import Footer from "../../Component/Footer/Footer.jsx"
export default function Accueil() {
    return(
         <div>
             <NavBar/>
             <Main/>
             <Eve/>
             <Main2/>
             <Qus/>
             <Footer/>
         </div>
    )
}