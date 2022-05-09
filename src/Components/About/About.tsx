import React from 'react'
import './About.css'
function About() {
    return (
        <div className='about-us'>
            <div className='about'>
                <div className='about1'>
                    <h1 className='us'>ABOUT US</h1>
                    <h1 className='we'>We Believe...</h1>
                    <p className='para text-secondary'>
                        When people are kept in their natural habitats where they can build and grow,<br />
                        they often end up making magic. For each and everyone of these people across <br />
                        the globe, we, at SpaceCorp, are trying to make access to this habitat as easy and <br />
                        seamless as possible. Our first step in this direction is building a curated<br />
                        network of inspirational spaces, environments and ecosystems.<br />
                    </p>
                </div>
                <img src='/Images/workImage.png' className='about-image' alt='image' />
            </div>
            <div className='our-footprint'>
                <div className='footprint'>
                    <h1 className='our-foot'>Our Footprint</h1>
                    <p className='para1 text-secondary'>
                        Starting from one city a few years ago, we have come a long way in empowering people with freedom and flexibility <br />
                        to do their best work<br />
                    </p>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='card'>
                            <img src='Images/1.svg' className='svg' alt='image' />
                            <div className='card-body'>
                                <h6>500+ Workspaces</h6>
                                <p>to offer maximum<br />
                                    flexibility and productivity<br />
                                    to all our users<br />
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-2'>
                        <div className='card'>
                            <img src='Images/2.svg' className='svg' alt='image' />
                            <div className='card-body'>
                                <h6>5000+ Members</h6>
                                <p>reflecting the community<br />
                                    of working professional &<br />
                                    businesses<br />
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-2'>
                        <div className='card'>
                            <img src='Images/3.svg' className='svg' alt='image' />
                            <div className='card-body'>
                                <h6>500+ Companies</h6>
                                <p>bringing together a rich<br />
                                    fabric of teams and<br />
                                    synergies<br />
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-2'>
                        <div className='card'>
                            <img src='Images/4.svg' className='svg' alt='image' />
                            <div className='card-body'>
                                <h6>10 Cities</h6>
                                <p>adopting the new ways to<br />
                                    works and like culture<br />
                                    of work<br />

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-2'>
                        <div className='card'>
                            <img src='Images/5.svg' className='svg' alt='image' />
                            <div className='card-body'>
                                <h6>6 Solution Offerings</h6>
                                <p>adopted to suit the<br />
                                    diverse needs of people<br />
                                    we empower<br />
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='who'>
                <div className='about2'>

                    <h1 className='we'>Who are we?</h1>
                    <p className='para2 text-secondary'>
                        Launched in Delhi in 2022, SpaceCorp is one of the largest workspace<br />
                        providers in the country. We are the new age workspace experts. Our <br />
                        workspaces are curated after careful deliberation and an empathic <br />
                        real-estate. We are present across 10 cities, enabling tens of thousands of<br />
                        people to make magic everyday. We are changing the way commercial<br />
                        real-estate works by providing everyone with the freedom and flexibility<br />
                        o work any-where and any-way they like.<br />
                    </p>
                </div>
                <img src='/Images/whoarewe.png' className='who-image' alt='image' />
            </div>

            <div className='stand-for'>
                <img src='/Images/Standfor.jpeg' className='stand-image' alt='image' />
                <div className='about3'>

                    <h1 className='we'>What do we stand for?</h1>
                    <p className='para3 text-secondary'>
                        At SpaceCorp, we stand for creating ecosystems that empower people to<br />
                        build, innovate, create, grow and explore progress to the best of their<br />
                        abilities. We invest everyday into bridging the gap between people and <br />
                        the magic they can make through our carefully curated ecosystems.<br />

                    </p>
                    <div className='vision'>
                        <h3 className='we'>Vision</h3>
                        <p className='para4 text-secondary'>
                            To enable mavericks, make magic by providing work-friendly corners at a<br />
                            stone’s throw anywhere across the world<br />
                        </p>
                    </div>

                    <div className='mission'>
                        <h3 className='we'>Mission</h3>
                        <p className='para5 text-secondary'>
                            To empower the new age workforce with freedom and flexibility to work<br />
                            in any way that they want and from anywhere by providing technology<br />
                            driven innovative workspace solutions.<br />
                        </p>
                    </div>
                </div>
            </div>

            <div className='our-value'>
                <div className='value'>
                    <h1 className='our'>Our Values</h1>
                    <div className='simlicity text-secondary'>
                        <h4>Simplicity</h4>
                        <p>
                            We believe in creating simple and<br />
                            seamless experiences.<br />
                        </p>
                    </div>

                    <div className='integrity text-secondary'>
                        <h4>Integrity</h4>
                        <p>
                            We are completely transparent and upfront.<br />

                        </p>
                    </div>

                    <div className='progressive text-secondary'>
                        <h4>Progressive</h4>
                        <p>
                            We are smart and forward looking.<br />

                        </p>
                    </div>
                </div>


                <div className='value1'>
                    <div className='innovative text-secondary'>
                        <h4>Innovative</h4>
                        <p>
                            We are always curious to explore uncharted territories.<br />

                        </p>
                    </div>

                    <div className='collaborative text-secondary'>
                        <h4>Collaborative</h4>
                        <p>
                            We believe in the power of a team over an individual.<br />

                        </p>
                    </div>

                    <div className='user-centric text-secondary'>
                        <h4>User Centirc</h4>
                        <p>
                            We are always around to help.<br />

                        </p>
                    </div>
                </div>

            </div>



        </div>

    )
}

export default About