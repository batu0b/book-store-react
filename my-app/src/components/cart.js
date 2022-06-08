import React from "react";

function Cart({ removeAll,basket,azaltCart,arttır,removeBasket,total }) {
  return (
    <div>
      <h1 className="topic">Sepetim</h1>
      <div className="totalCart">

        <h3>Toplam Tutar: {total.toFixed(2)} </h3>
        <button onClick={removeAll} className="btn-3">Sepeti Temizle</button>
        

        


      </div>


      <div className="container-top">
        {basket.map((book) => (
          <div key={book.id} className="container">
            <div className="card-body">
              <div className="card-img">
                <img src={book.image} />
              </div>

              <div className="card-content">
                <h3>{book.name} </h3>
                <br />
                <h4>Yazar: {book.author} </h4>
                <h4>Fiyat: {book.price}₺ </h4>
                <p>sepetinizde bu kitaptan {book.count} adet var </p>
                <div className="btns">
                    <button onClick={() => azaltCart(book)} className="btn-3">-</button>

                    <button onClick={() => removeBasket(book) } className="btn-3">Sepetten Çıkar</button>

                    <button onClick={() => arttır(book)} className="btn-3">+</button>

                </div>

              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
