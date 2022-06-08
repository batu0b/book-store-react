import React from "react";
import "../css/footer.css"


function Footer() {
    return ( 
        <div className="footer-container">
            <div className="footer">
                <div>
                    <p>Kitap Sepeti © Copyright 2022</p>
                </div>

                <div className="footer-social">
                    <ul>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li>
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                        </li>

                    </ul>
                    
                   
                    
                </div>

            </div>
        </div>
     );
}

export default Footer;