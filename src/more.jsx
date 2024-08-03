import React from 'react'
import { useState } from 'react'
import "./App.css"
import  "./App" 

export default function more() {
    const [isDark, SetIsDark] = useState(true)
  return (
    <div className='home'> 
       <div className="home1">
            <button className='les-btn' onClick={() => {
               SetIsDark(!isDark)
            }}>
                {isDark?"light":"Dark"}
            </button>
       </div>
    </div>
  )
}