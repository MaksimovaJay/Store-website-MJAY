import React from 'react';
import {Cart} from "../../types";
import CartItem from "../../components/CartItem/CartItem";

interface Props {
  cartCatalogItems: Cart[];
}

const Cart: React.FC<Props> = ({cartCatalogItems}) => {
  const total = cartCatalogItems.reduce((sum, cartCatalogItem) => {
    return sum + cartCatalogItem.catalogItem.price * cartCatalogItem.amount;
  }, 0);

  let cart = (
    <div className="alert alert-primary">
      Корзина пока пуста! </div>
  );
  if (cartCatalogItems.length > 0) {
    cart = (
      <>
        <div className="wrapper">
          {cartCatalogItems.map(cartCatalogItem => (
            <CartItem
              key={cartCatalogItem.catalogItem.id}
              cartCatalogItem={cartCatalogItem} amount={0}/>
          ))}
        </div>
        <div className="total-card">
          <p>TOTAL:</p>
          <p><strong>{total}</strong> KGS</p>
        </div>
      </>
    );
  }
  return (
    <>
      <h4>Корзина</h4>
      {cart}
    </>
  );
};

export default Cart;