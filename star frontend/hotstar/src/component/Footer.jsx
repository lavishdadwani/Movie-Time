import React from 'react'
import {FaFacebookSquare,FaTwitterSquare} from "react-icons/fa"
// import {IoLogoGooglePlaystore} from "react-icons/io"
import "../styles/footer.css"
const Footer = () => {
    return (
        <div className="footerPage">
            <div className="footer1">
                <div className="subFooter">
           <h3>About Movie Times  </h3> 
           <h3> Terms Of Use  </h3> 
           <h3> Privacy Policy  </h3> 
           <h3>FAQ  </h3> 
           <h3>Feedback  </h3> 
           <h3> Careers  </h3>
                </div>
                <div className="subFooter">
                    <p>© 2021 MOVIE TIMES. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                </div>
            </div>
            <div className="footer2">
                <h3>Connect with us</h3>
                <div className="logos">
                    <FaFacebookSquare/><p>      </p>
                    <FaTwitterSquare/>
                </div>
            </div>
          
        </div>
    )
}

export default Footer
