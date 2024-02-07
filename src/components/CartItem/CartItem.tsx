import React from 'react';
import {Cart} from "../../types";

interface Props {
  cartCatalogItem: Cart;
  amount: number;

}
const CartItem: React.FC<Props> = ({cartCatalogItem}) => {
  const price = cartCatalogItem.catalogItem.price * cartCatalogItem.amount;
  return (
    <div className="card">
      <div>
        <img className="img-catalog" src={cartCatalogItem.catalogItem.image} alt=""></img>
      </div>
      <div className="card-body">
        <h3 className="card-title">{cartCatalogItem.catalogItem.name} <span>x {cartCatalogItem.amount}</span></h3>
        <p className="card-text "></p>
        <div>
          TOTAL FOR ITEM: {price} KGS
        </div>
      </div>
    </div>
  );
};

export default CartItem;