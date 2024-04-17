import "../Login/Login.css"
import { faPaperPlane , faCircleUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import te from "../Images/Te.jpg"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    let [date ,setDate ] = useState('')
    let [ id,setId ] = useState('')
    let nav = useNavigate('')
    async function Login() {
        try {
             const res = await axios.post('http://localhost:3000/auth/login' ,{
                 ddn : date , 
                 id : id
             })
             if(res.data.code == '01' ) {
                alert('Not Found')
                return
             }
             if(res.data.code == "02"){
                alert('Password is Wonrg ')
                return
             }
             if(!res.data.data.IsProf){
                nav('/etudiant')
                return
             }
              nav('/prof')
             
        } catch (err) {
            console.log(err);
        }
    }

    return(
         <div className="PageLogin">
             <div className="BoxLogin">
                   <div className="One">
                       <div style={{margin:'0 auto' }}><FontAwesomeIcon icon={faCircleUser} style={{fontSize:'50px' , marginBottom:'20px'}} /></div>
                       <div className="io"><input type="text" placeholder="EMAIL" onChange={(e)=>setDate(e.target.value)} /></div>
                       <div><input type="text"  placeholder="Password" onChange={(e)=>setId(e.target.value)}/></div>
                      <div style={{textAlign:'end', padding:'3px', cursor:'pointer'}}> Forget Password ?</div>
                      <button className="bbbb" onClick={Login}>
                     <FontAwesomeIcon  style={{marginRight:'4px'}} icon={faPaperPlane} />  Login
                     </button>
                 </div>

                 <div className="two" style={{background:`url(${te})`}}>
                    
                 </div>


             </div>
         </div>
    )
}