import React, { useState } from 'react'
import star from './images/icon-star.svg'
import { useNavigate } from "react-router-dom";



const Ratings = () => {
    const navigate = useNavigate();

    const [color, setColor] = useState({index:0, colo:false});
    const [secondColor, setSecondColor] = useState({ index: 0, colo: false });




    const number = [
        { no: 1, id: 0 }, { no: 2, id: 1 }, { no: 3, id: 2 }, { no: 4, id: 3 }, { no: 5, id: 4 }
    ]

    const showColor = (index) => {
       
        for (let i = 0; i < number.length; i++) {
            if (index === number[i].id) {
                setColor({ index: index, colo: true })
            }
        }
        const prevIndex = index - 1
        setSecondColor({ index: prevIndex, colo: true })
        
        localStorage.setItem("color", JSON.stringify(index+1))
    }
    const clickMe = () => {
        if (color.colo === true) {
            navigate("/submit")
        }
    }



    

    return (
        <main className='background'>
            <div className='cardBackground'>
                <img src={star} alt="icon star" />
                <h2 className='feedbackQuest'>How did we do?</h2>
                <article className='feedBack'>please let us know how we did with your support request. all feedback is appreciated to help us improve our offering!</article>
                <div className='ratingNumbers'>
                    
                    {number.map((data, index) => (
                        <p key={index} className={`ratingIndividual ${color.colo === true && color.index === index? 'changeColor' : ''} ${secondColor.colo === true && secondColor.index === index ? 'changeSecondColor' : ''}`}
                        onClick={() => { showColor(index) }}>{data.no}</p>
                    ))}

                </div>
                
                <button className='submitButton'
                    onClick={clickMe}>
                 SUBMIT
                </button>
            </div>
        </main>
    )
}

export default Ratings