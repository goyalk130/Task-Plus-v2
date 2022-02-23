import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return (<div className='main-header'>
        <div className='inner-header'>
            <div className='in-head name'><p>Task+</p></div>
            <div className='in-head'>
                <ul type="none">
                    <li><Link to="/"><p>DailyTasks</p></Link></li>
                    <li><Link to="/work"><p>WorkTasks</p></Link></li>
                </ul>
            </div>
        </div>
    </div>)
}