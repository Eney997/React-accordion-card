import React, { useState } from 'react'
import Card from '../Components/Card'
import './Content.css'
import mobImg from '../public/mobFullPick.svg'
import arrowMob from '../public/arrowMob.svg'
import shadowMob from '../public/shadowMob.svg'
import { info } from './App'

const Content = ({ answer, question }) => {
  let [selected, setSelected] = useState(null)
  let toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <Card>
      <img src={mobImg} className='mobImge' alt='Mobile Image' />
      <img src={shadowMob} className='shadowMob' alt='Shadow Image' />
      <h1 className='Faq'>FAQ</h1>
      <div className='accordion'>
        {info.map((item, i) => (
          <div key={i}>
            <div className={question}>
              <h2 id='tittle' onClick={() => toggle(i)}>
                {item.question}
              </h2>
            </div>
            <img
              src={arrowMob} onClick={() => toggle(i)}
              className={`arrowImg ${selected === i ? '' : 'rotate'}`}
              alt='Arrow Image'
            />
            <div className={`content ${selected === i ? 'content show' : 'content'}`}>
              {item.answer}
            </div>
            <div className='underLine'></div>
          </div>
        ))}
      </div>
    </Card>
  )
}
export default Content
