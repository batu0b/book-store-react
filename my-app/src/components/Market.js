import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/market.css";
import { data } from "../data";
import { dataAll } from "../data2";

function Market({ data2, addToCart, basketLeght }) {
  const [category, setCategory] = useState(data2);

  const [filterBooks, setFilterBooks] = useState(category);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    setFilterBooks(

      category.filter((book) => {
        return (
          book.name
            .toLocaleLowerCase()
            .indexOf(textSearch.toLocaleLowerCase()) !== -1
        );
      })

    );
  }, [category, textSearch]);

  const cotegoryBook = (catItem) => {
    const cat = category.filter((e) => {
      return e.category === catItem;
    });

    setFilterBooks(cat);
  };

  const searchValue = (e) => {
    setTextSearch(e.target.value);
    console.log(textSearch);
  };

  return (
    <div>
      <nav className="navbar2">
        <div>
          <input
            value={textSearch}
            onChange={(e) => searchValue(e)}
            type="text"
            placeholder="Lütfen Aradığınız Kitabın İsmini Giriniz..."
            className="searchBar"
          />
        </div>

        <div className="menu">
          <ul>
            <li>
              <Link to={"/"} className="linkler link">
                Anasayfa
              </Link>
            </li>
            <br />

            <li>
              <Link to={"/Cart"} className="linkler link">
                Sepetim<i className="fa-solid fa-cart-shopping"></i>
                {basketLeght}
              </Link>
            </li>
          </ul>

          <style jsx>
            {`
              .menu {
                font-size: 20px;
              }
            `}{" "}
          </style>
        </div>
      </nav>

      <div className="page">
        <div className="sidenav-top">
          <div className="sidenav">
            <h1>Katagoriler</h1>{" "}
            <button onClick={() => setFilterBooks(data2)} className="radio-btn">
              Tümü
            </button>{" "}
            <button onClick={() => cotegoryBook("test")} className="radio-btn">
              Test
            </button>{" "}
            <button onClick={() => cotegoryBook("okuma")} className="radio-btn">
              Okuma
            </button>
            <button onClick={() => cotegoryBook("çocuk")} className="radio-btn">
              Çocuk
            </button>
            <button
              onClick={() => cotegoryBook("yetiskin")}
              className="radio-btn"
            >
              Yetişkin
            </button>
            <button onClick={() => cotegoryBook("korku")} className="radio-btn">
              Korku
            </button>
          </div>
        </div>

        <div className="top">
          {filterBooks.map((book) => (
            <div key={book.id} className="container2">
              <div className="card">
                <div className="card-image">
                  <img src={book.image} alt="" />
                </div>

                <div className="card-text">
                  <h4>{book.name} </h4>
                  <h4>Yazar: {book.author} </h4>
                  <h4>Fiyat: {book.price}₺ </h4>
                  <button onClick={() => addToCart(book)} className="btn-3">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Market;
