import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import './SpaceTYpe.css'
function SpaceType() {
  return (
    <div>
    <section className='section'>
        <div className='container spaceType'>
            <div>
            <Card style={{ width: '18rem' }} >
                <div className="cardBS">
                <div className='cardSection'>
                    <Card.Img src="Images/Hotseat.png" className="hotseat" />
                </div>
                <div className='cardSection'>
                <Card.Body>
                  <Card.Title style={{marginTop: '20px'}}>Hotseat</Card.Title>
                  <Card.Text>
                    Sitting area for individuals
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Link to="/spacelist/hotseat">Explore <i className="bi bi-arrow-right"></i></Link>
                </Card.Body>

                </div>
                </div>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }} >
                <div className="cardBS">
                <div className='cardSection'>
                    <Card.Img src="Images/LargeDesk.png" className="largeDesk" />
                </div>
                <div className='cardSection'>
                <Card.Body>
                  <Card.Title style={{marginTop: '20px'}}>Large Desk</Card.Title>
                  <Card.Text>On demand desk for teams</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Link to="/spacelist/largedesk">Explore <i className="bi bi-arrow-right"></i></Link>
                </Card.Body>

                </div>
                </div>
            </Card>
            </div>

            <div>
            <Card style={{ width: '18rem' }} >
                <div className="cardBS">
                <div className='cardSection'>
                    <Card.Img src="Images/Cabin.png" className="cabin" />
                </div>
                <div className='cardSection'>
                <Card.Body>
                  <Card.Title style={{marginTop: '20px'}}>Cabin</Card.Title>
                  <Card.Text>Full fledged cabin for privacy</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Link to="/spacelist/cabin">Explore <i className="bi bi-arrow-right"></i></Link>
                </Card.Body>

                </div>
                </div>
            </Card>
            </div>
        </div>

    </section>
    </div>
  )
}

export default SpaceType