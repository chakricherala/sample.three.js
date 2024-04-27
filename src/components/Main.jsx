import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import Holding from '../assets/images/iphone-hand.png'

const Main = () => {

    const handlelink = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    
  return (

    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt="" />
        <p className='text'>Big and bigger.</p>
        <span className='description'>
            From $42.62/mo.
        </span>
        <ul className='links'>
            <li>
                <button type="button" className='button'>Buy</button>
            </li>
            <li>
                <a className='link' onClick={handlelink} href="#">Learn more.</a>
            </li>
        </ul>
        <img className='iphone-img' src={Holding} alt="" />
    </div>
  )
}

export default Main