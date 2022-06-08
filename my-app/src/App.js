import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import { data } from "./data";
import Footer from "./components/footer";

import BestSellers from "./components/BestSellers";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart";
import Market from "./components/Market";
import { dataAll } from "./data2";

function App() {
  const [sellers, setSellers] = useState(data);
  const [basket, setBasket] = useState([]);
  const [data2, setData2] = useState(dataAll);
  const [text, setText] = useState("");

  const total = basket.reduce(
    (toplam, book) => (toplam = toplam + book.count * book.price),
    0
  );

  const basketLeght = basket.reduce(
    (toplam, book) => (toplam = toplam + book.count),0
  );

  const searchText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const addToCart = (item) => {
    const checkBasket = basket.find((basketItem) => basketItem.id === item.id);

    if (checkBasket) {
      checkBasket.count += 1;

      setBasket([
        ...basket.filter((basketItem) => basketItem.id !== item.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };

  //azaltma işlemini üstteki gibi yapınca her seferde yeni dizi oluşturup eklediğinden elemanların dizilişi değişiyor farklı bi yol bul onun yerine map edip count değerini bir azaltan fonksiyon yazdım
  const azaltCart = (item) => {
    setBasket(
      basket.map((basketItem) =>
        basketItem.id === item.id
          ? {
              ...basketItem,
              count: basketItem.count > 1 ? basketItem.count - 1 : 1,
            }
          : basketItem
      )
    );
  };

  const arttır = (item) => {
    setBasket(
      basket.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, count: basketItem.count + 1 }
          : basketItem
      )
    );
  };

  const removeBasket = (item) => {
    setBasket([...basket.filter((basketItem) => basketItem.id !== item.id)]);
  };

  const removeAll = () => {
    setBasket([]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar basketLeght={basketLeght} />

              <BestSellers
                basket={basket}
                sellers={sellers}
                setBasket={setBasket}
                addToCart={addToCart}
              />
            </>
          }
        />
        <Route
          path="Cart"
          element={
            <>
              <NavBar 
                basketLeght={basketLeght}
              />
              <Cart
                removeAll={removeAll}
                total={total}
                basket={basket}
                azaltCart={azaltCart}
                arttır={arttır}
                removeBasket={removeBasket}
              />
            </>
          }
        />

        <Route
          path="books"
          element={
            <>
              <Market
              basketLeght={basketLeght}
              
                dataAll={dataAll}
                addToCart={addToCart}
                setData2={setData2}
                data2={data2}
                searchText={searchText}
                text={text}
                setText={setText}
              />
            </>
          }
        />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
