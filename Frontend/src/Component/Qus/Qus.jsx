import '../Qus/Qus.css'
import {faCircleArrowLeft , faClipboardQuestion, faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
export default function Qus() {
        let [qus1, setQus1] = useState(false)
        let [qus2, setQus2] = useState(false)
        let [qus3, setQus3] = useState(false)
        let [qus4, setQus4] = useState(false)
        let [qus5, setQus5] = useState(false)
    return(
        <div  style={{marginTop:'90px', textAlign:'center' }}>
          <h2 style={{marginBottom:'20px' ,marginTop:'60px'}}><FontAwesomeIcon icon={faClipboardQuestion} /> Qeustion</h2>
           <div className='pageOfQus'>
          
             <div className='OneOfQus'>
                <p style={{marginTop:'20px' , marginBottom:'20px', color:'blueviolet', fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus.</p>
                 <h1>Frequently Asked Qustions</h1>
                 <p style={{marginTop:'20px' , color:'blueviolet'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit corporis a est? Cumque necessitatibus ipsum neque harum eum voluptate beatae maxime sint assumenda, deserunt doloremque ex, quidem odit cum.</p>
             </div>

             <div className='TwoOfQus'>
                <div onClick={()=>setQus1(p=>!p)}>
                    <p>qus 1</p>
                     {!qus1 ?<FontAwesomeIcon icon={faCircleArrowLeft} />:<FontAwesomeIcon icon={faCircleArrowDown} />}
                     
                </div>
                {qus1 && <p className='As'> awns 1 </p>}

                <div onClick={()=>setQus2(p=>!p)}>
                    <p>qus 2</p>
                     {!qus2 ?<FontAwesomeIcon icon={faCircleArrowLeft} />:<FontAwesomeIcon icon={faCircleArrowDown} />}
        
                </div>
                 {qus2 && <p className='As'> awns 2</p>}

                <div onClick={()=>setQus3(p=>!p)}>
                    <p>qus 3</p>
                     {!qus3 ?<FontAwesomeIcon icon={faCircleArrowLeft} />:<FontAwesomeIcon icon={faCircleArrowDown} />}
                    
                </div>
                 {qus3 && <p className='As'> awns 3 </p>}

                <div onClick={()=>setQus4(p=>!p)}>
                     <p>qus 5</p>
                     {!qus4 ?<FontAwesomeIcon icon={faCircleArrowLeft} />:<FontAwesomeIcon icon={faCircleArrowDown} />}
                    
                </div>
                 {qus4 && <p className='As'> awns 4 </p>}

                <div onClick={()=>setQus5(p=>!p)}>
                     <p>qus 5</p>
                     {!qus5 ?<FontAwesomeIcon icon={faCircleArrowLeft} />:<FontAwesomeIcon icon={faCircleArrowDown} />}
                </div>
                 {qus5 && <p className='As'> awns 5 </p>}

             </div>
         </div>
        </div>
        
    )
}