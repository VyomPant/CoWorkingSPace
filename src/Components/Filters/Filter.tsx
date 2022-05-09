import React from 'react'
import { Nav } from 'react-bootstrap'
import './Filter.css'
function Filter() {
  return (
    <section className='section3'>
        
            <h6 className='filter'>FILTERS</h6>
            <div className='timing'>
            <div className='col-md-4'>
             
                <div className='timing1'>    
                   <Nav.Link href="#home" >Timing<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                  </svg></Nav.Link>
                   </div>

                

            </div>
            </div>
        <div className='rating'>
            <div className='col-md-4'>
                    
                    <div className='rating1'>  
                        <Nav.Link href="#home">Rating<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                           </svg>
                        </Nav.Link> 
                    </div>

                   
            </div>
            </div>
        

    </section>
    
  )
}

export default Filter