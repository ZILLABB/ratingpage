import React from 'react'
import log from './images/illustration-thank-you.svg'

const SubmitPage = () => {


    const color=JSON.parse(localStorage.getItem("color"))


    return (
        <main>
            <div className='welcomeCard'>
                <img className='welcomeImage' src={log} alt="" />
                <p className='choice'>You selected {color} out of 5</p>
                <h1 className='thanks'>Thank you!</h1>
                <article className='article'>We appreciate you taking your time to give a <br /> rating. If you ever need more support, don't <br /> hesitate to get in touch!</article>
            </div>
        </main>
    )
}

export default SubmitPage