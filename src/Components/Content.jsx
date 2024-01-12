import React, { useState } from 'react'
import Card from '../Components/Card'
import './Content.css'
import mobImg from '../public/mobFullPick.svg'
import arrowMob from '../public/arrowMob.svg'
import shadowMob from '../public/shadowMob.svg'
import { info } from './App'

const Content = ({answer,question}) => {
  
  return (
    <Card>
        <img src={mobImg} className='mobImge'></img>
        <img src={shadowMob} className='shadowMob'></img>
        <h1 className='Faq'>FAQ</h1>
        <div className='accordion'>
            {info.map((item,i)=>(
            <div key={i}>
               <div className={question}>
                <h2 id='tittle'>{item.question}</h2>
               </div>
               <img src={arrowMob} className='arrowImg'></img>
               <div id='content' className={answer}>{item.answer}</div>
               <div className='underLine'></div>
            </div>
            ))}
        </div>
    </Card>
  )
}

export default Content
