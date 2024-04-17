import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Main2() {
    let ar =[
         {
            Number : '3,700' ,
            message: "register"
         } ,
         {
            Number : '3,700' ,
            message: "register"
         } ,
         {
            Number : '3,700' ,
            message: "register"
         } ,
         {
            Number : '3,700' ,
            message: "register"
         } ,
    ]
    return(
         <div className="Main2">
            <h2 style={{marginBottom:'20px' , textAlign:'center' ,marginTop:'30px'}}><FontAwesomeIcon icon={faChartLine}  /><span style={{marginLeft:'10px'}}>Statistique de noter Departement</span></h2>
             <div style={{display:'flex' , gap:'40px' ,justifyContent:'center' , textAlign:'center', marginTop:'50px'}}>
               {ar.map((e , i)=> <div key={i} style={{ width:'23%' ,justifyContent:'center',display:'flex',flexDirection:'column' , gap:'30x', borderRight:i!= ar.length - 1 ?'1px solid rgba(0, 0, 0, 0.301)':"" }}> 
                  <div style={{fontSize:'25px' , fontWeight:'bold'}}>{e.Number} <span style={{fontSize:'16px' ,marginTop:"16px" , color:'blueviolet', fontWeight:'bold' }}>+</span></div>
                  <div style={{marginTop:'10px'}}>{e.message}</div>
               </div>)}
             </div>
 
         </div>
    )
}