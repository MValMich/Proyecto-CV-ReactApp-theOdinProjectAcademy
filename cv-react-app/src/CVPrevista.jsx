import './App.css'
import React from 'react'
// import { InfoGeneral } from './InfoGeneral'
import { useState } from 'react'

function appendCV() {
    const div = document.createElement('div')
    div.textContent ='string'
    document.querySelector('#container').append(div)
}

export function CVPrevista(){
    return(
        <>
        {/* {InfoGeneral} */}
        <button onClick={appendCV}>click</button>
        <div id='container'></div>
        </>
    )
}
