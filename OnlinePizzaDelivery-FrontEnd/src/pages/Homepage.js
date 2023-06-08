import React from 'react'
import Home from './Home';
import CartBar from './CartBar';

function Homepage() {
  return (
    <div>
        <div className='home'>
        <Home/>
            {/* <div className='fixed'>
            <CartBar/>
            </div> */}
        </div>
    </div>
  )
}

export default Homepage