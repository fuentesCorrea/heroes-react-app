import React from 'react'
import { Link } from 'react-router-dom'
import { getSelectorById } from '../../selector/getSelectorById'
import '../dc/dcScreen.css'

const DcScreem = () => {

    const data = getSelectorById('dc-superman')
    console.log(data , 'desde dc');
    return (
        <div className="wraap">
                    
                    <ul className="progressbar">
                        <li className="active">step1</li>
                        <li ><Link to="/marvel">step2</Link></li>
                        <li >step3</li>
                        <li >step4</li>
                    </ul>
                
        </div>
    )
}

export default DcScreem
