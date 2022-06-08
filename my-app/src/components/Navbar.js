import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../css/buttons.css";

function NavBar({ basketLeght }) {


  
  return (
    <main className="main-header">
      <div className="navbar">
        <div>
          <h1>
            {" "}
            <i style={{ color: "#d82148" }}>Kitap</i>Sepetim{" "}
          </h1>
        </div>

        <div className="navbar-items">
          <ul>
            <li>
              <Link to={"/"} className="linkler">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to={"/"} className="linkler">
                Katagoriler
              </Link>
            </li>
            <li className="sepet-link">
              <Link to={"/Cart"} className="linkler">
                Sepetim<i className="fa-solid fa-cart-shopping"></i>{" "}
                <span className="basketLeght">{basketLeght}</span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-content">
        <h3>Kitap Sepetine Hoş Geldiniz</h3>
        <p>lorem impus</p>
        <br />
        <Link to="/books" className="btn-1">
          Tüm Kitaplar 📚
        </Link>
      </div>
    </main>
  );
}

export default NavBar;
