import React from "react";
import {CatalogItem} from "../../types";

const noImageAvailable = 'https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg';

interface Props {
  catalogItem: CatalogItem;
  addToCart: React.MouseEventHandler;
}

const CatalogItem: React.FC<Props> = ({catalogItem, addToCart}) => {
  const image = catalogItem.image || noImageAvailable;

  return (
    <div className="card" onClick={addToCart}>
      <div>
        <img className="img-catalog" src={image} alt=""></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{catalogItem.name}</h5>
        <p className="card-text small">{catalogItem.description}</p>
        <p className="card-text ">{catalogItem.price} KGS</p>
      </div>
    </div>
  );
};

export default CatalogItem;