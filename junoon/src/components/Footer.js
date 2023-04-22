import React from 'react';
class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
               <div className="footer">
               <div className="logo-footer">
                 <img src="images/junoon-logo-only.png" alt="" />
               </div>
               <div className="social-footer-icon">
               <i class="uil uil-instagram"></i>
               <i class="uil uil-facebook"></i>
               </div>
               </div>
            </>
        );
    }
}
 
export default Footer;