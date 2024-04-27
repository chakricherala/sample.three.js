import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Navbar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                {/* <ul className='list-styled'>
                <li>
                    <img src={Logo} alt="Apple" />
                </li>
            </ul> */}
                <ul class="list-styled">
                    <li>
                        <img src={Logo} alt="Apple"/>
                    </li>
                    <li><a class="link-styled">Store</a></li>
                    <li><a class="link-styled">Mac</a></li>
                    <li><a class="link-styled">iPad</a></li>
                    <li><a class="link-styled">iPhone</a></li>
                    <li><a class="link-styled">Watch</a></li>
                    <li><a class="link-styled">AirPods</a></li>
                    <li><a class="link-styled">TV &amp; Home</a></li>
                    <li><a class="link-styled">Entertainment</a></li>
                    <li><a class="link-styled">Accessories</a></li>
                    <li><a class="link-styled">Support</a></li>
                    <li><img src={Search} alt="Search"/></li>
                    <li><img src={Store} alt="Store"/></li></ul>
            </div>
        </nav>
    )
}

export default Navbar