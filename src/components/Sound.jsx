import React from 'react'

const Sound = () => {

    const handleMore = () => {
        const element = document.querySelector(".display-section")
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='sound-section wrapper'>
            <div className='body'>
                <div className='sound-section-content content'>
                    <h2 className='title'>New Sound System</h2>
                    <p className='text'>Feel the base.</p>
                    <span className='description'>
                        From $41.62/mo.
                    </span>
                    <ul className='links'>
                        <li>
                            <button type="button" className='button'>Buy</button>
                        </li>
                        <li>
                            <a className='link' onClick={handleMore} href="#">Learn more.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sound