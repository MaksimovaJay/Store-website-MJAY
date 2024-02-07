import React from 'react';
import {CatalogItem as CatalogItemType} from "../../types";
import CatalogItem from "../../components/CatalogItem/CatalogItem";

interface Props {
  catalogItems: CatalogItemType[];
  addToCart: (dish: CatalogItemType) => void;
}

const Catalog: React.FC<Props> = ({catalogItems, addToCart}) => {
  return (
    <>
      <h4>Каталог</h4>
    <div className='wrapper'>
      {catalogItems.map(catalogItem => (
        <CatalogItem
          key={catalogItem.id}
          catalogItem={catalogItem}
          addToCart={() => addToCart(catalogItem)}
        />
      ))}
    </div>
    </>
  );
};

export default Catalog;