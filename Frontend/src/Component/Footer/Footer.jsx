import "./Footer.css"
import {faLocationDot , faPhone , faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
     return(
         <div className="Footer">
              <div style={{display:'flex', justifyContent:'center',gap:'20px',   padding: "10px"}}>

                 <div style={{display:'flex', gap:'20px'}} className=" ll ">
                    <FontAwesomeIcon icon={faLocationDot} style={{alignSelf:'center'}} />
                    <div>
                         <p>Location</p>
                         <p>Telemcen , lkaid</p>
                    </div>
                 </div>

                 <div className=" ll">
                       <FontAwesomeIcon icon={faPhone} style={{alignSelf:'center'}} />
                       <div>
                         <p>Phone</p>
                         <p>0562232628</p>
                    </div>
                 </div>

                 <div className="ll">
                     <FontAwesomeIcon icon={faEnvelope} style={{alignSelf:'center'}} />
                    <div>
                         <p>Email</p>
                         <p>teme@gmail.com</p>
                    </div>
                 </div>

              </div>

              {/* <div className="Res">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
              </div> */}

              <div style={{textAlign:'center' , marginTop:'30px' , background:' rgb(39, 1, 74)', width:'100%'}}>	&copy; All Right is reserved 2024</div>

         </div>
     )
}