import React from 'react'
import './Title.css'
import {Button} from 'react-bootstrap'
function Title() {
  return (
    <section className='section5'>
        <div className='imagetitle'>
            <img src='Images/SpaceDefault.png'   alt='image' />
            </div>

            <div className='title'>
              <div className='col-md-4'>
                     <h1 className='title1'><b>Title</b></h1> 
                     <p className='cowork'>Coworking | Rating</p>
                     <h6 className='city'>City / Location</h6>
                     <Button href="#" variant="primary" className="booknow">Book</Button>
                 </div>
            </div>
            <hr/>
        </section>
  )
}

export default Title