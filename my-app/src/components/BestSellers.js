import React from "react";
import "../css/bestSellers.css";

function BestSellers({ sellers, basket, setBasket,addToCart }) {


  

  


  return (
    <div>
      <h1 className="topic">Çok satanlar</h1>

      <div className="container-top">
        {sellers.map((book) => (
          <div key={book.id} className="container">
            <div className="card-body">
              <div className="card-img">
                <img src={book.image} />
              </div>

              <div className="card-content">
                <h3>{book.name} </h3>
                <br/>
                <h4>Yazar: {book.author} </h4>
                <h4>Fiyat: {book.price}₺ </h4>
                <button onClick={() => addToCart(book)} className="btn-2">Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
