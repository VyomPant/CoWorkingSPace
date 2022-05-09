import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return(
        <div>
            <footer className="text-white text-center text-lg-start mt-5" style={{backgroundColor: "#011c39"}}>
            <div className="container p-5">
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                    <div className="footerTitle">
                        <h5 className="text-uppercase">SpaceCorp</h5>
                        <img src='/Images/LogoRes.png' className='footerLogo'/>
                    </div>

                  <p>We provide community centers, collaboration hubs, 
                      and social spaces where workers from different 
                      backgrounds can come together to share expertise and explore new ideas.</p>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Products</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/spacelist/hotseat" className="text-white text-decoration-none">Hotseat</Link>
                    </li>
                    <li>
                      <Link to="/spacelist/largedesk" className="text-white text-decoration-none">Large Desk</Link>
                    </li>
                    <li>
                      <Link to="/spacelist/cabin" className="text-white text-decoration-none">Cabin</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Owner</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/spacelist/hotseat" className="text-white text-decoration-none">List Space</Link>
                    </li>
                    <li>
                      <Link to="/spacelist/largedesk" className="text-white text-decoration-none">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/spacelist/cabin" className="text-white text-decoration-none">Login</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Address</h5>
                    <p>123, Sector-35 <br/> Noida, Uttar Pradesh <br/> 110098</p>
                    <div >
                        <a href="#" className="contactIcons"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="contactIcons"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="contactIcons"><i className="bi bi-whatsapp"></i></a>
                        <a href="#" className="contactIcons"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>

              </div>
            </div>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              © 2022 Copyright:
              <span className="text-white">   SpaceCorp Lmt.</span>
            </div>
            </footer>
        </div>
    )
}
export default Footer;
