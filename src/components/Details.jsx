import React from 'react'

const Details = () => {

    const handleB =() =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <div className='display-section wrapper'>
            <h2 className='title'>New</h2>
            <p className='text'>Brillant.</p>
            <span className='description'>
                From $42.62/mo.
            </span>

            <button className='button'>Try me.</button>
            <button className='back-button' onClick={handleB}>Top</button>

        </div>
    )
}

export default Details