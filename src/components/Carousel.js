import React, {useState} from 'react'
import projectsInfo from './Project';
const Carousel = () => {
    const [current, setCurrent] = useState(projectsInfo[0])
    const [active, setActive] = useState(0)

    const handleSetClick = (e) =>{
        console.log(e)
    }

    return (
        <div className='carousel-container'>
            <div className='sliders'> {Object.keys(projectsInfo).map(index =>(
                <span id='dots' onClick={event=> handleSetClick(event)}
                data-project={index}
                key={index}
                />
                
            ))}</div>
        </div>
    )
}

export default Carousel


