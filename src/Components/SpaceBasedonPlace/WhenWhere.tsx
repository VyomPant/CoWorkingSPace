import React from 'react'
import { Nav } from 'react-bootstrap'
import './WhenWhere.css'
function WhenWhere() {
  return (
    <section className='section2'>
           {/* <div className='row'><div className='container'> */}
         
                <div className='when'>
            <div className='col-md-3'>
                    
                            <div className='when1'>
                            <Nav.Link href="#home" >When<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></Nav.Link>  </div>          

                       

                </div>
                </div>

                <div className='where'>
            <div className='col-md-4'>
                    
                        <div className='where1'>
                            <Nav.Link href="#home">Where<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></Nav.Link>   
                    
                       </div>

                        

                </div>
                </div>
                <div className='searching'>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                </div>


            {/* </div>
            </div> */}
            </section>
  )
}

export default WhenWhere