import React, { useState } from 'react'
import Card from '../Components/Card'
import './Content.css'
import mobImg from '../public/mobFullPick.svg'
import arrowMob from '../public/arrowMob.svg'
import shadowMob from '../public/shadowMob.svg'

const Content = () => {
    const [selected,setSelected] = useState(null)
    const toggle = (i) => {
        if (selected = i ) {
         return setSelected(null)
        }
        setSelected(i)
    } 
  return (
    <Card>
        <img src={mobImg} className='mobImge'></img>
        <img src={shadowMob} className='shadowMob'></img>
        <h1 className='Faq'>FAQ</h1>
        <div className='accordion'>
            <h1 className='forH'>How many team members can I invite?{selected}</h1>
            <img src={arrowMob} className='arrowImg'></img>
            <p className='forP'>The number of team members is not limited.</p>
            <div className='underLine'></div>


            <h2 className='forH'>What is the maximum file upload size?</h2>
            <img src={arrowMob} className='arrowImg'></img>
            <p className='forP'>No more than 2GB. All files in your account must fit your allotted storage space.</p>
            <div className='underLine'></div>


            <h3 className='forH'>How do I reset my password?</h3>
            <img src={arrowMob} className='arrowImg'></img>
            <p className='forP'>We will send you a link to reset your password on Gmail.</p>
            <div className='underLine'></div>


            <h4 className='forH'>Can I cancel my subscription?</h4>
            <img src={arrowMob} className='arrowImg'></img>
            <p className='forP'>Of course, you can cancel after one month for free.</p>
            <div className='underLine'></div>


            <h5 className='forH'>Do you provide additional support?</h5>
            <img src={arrowMob} className='arrowImg'></img>
            <p className='forP'>You can find all kinds of information on the website.</p>
            <div className='underLine'></div>
        </div>
    </Card>
  )
}

export default Content