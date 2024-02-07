import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Catalog from "./containers/Catalog/Catalog";
import CatalogForm from "./containers/CatalogForm/CatalogForm";
import Cart from "./containers/Cart/Cart";
import {Cart as CartType, CatalogItem} from "./types";
import {useState} from "react";

function App() {
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([
    {id: '1', name: 'Костюм', description:'Двойка, серого цвета, размер s,m,l', image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666168669_42-mykaleidoscope-ru-p-krasivaya-modnaya-odezhda-zhenskie-instagr-44.jpg', price:3550},
    {id: '2', name: 'Костюм', description:'Двойка, серого цвета, размер s,m,l', image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666168669_42-mykaleidoscope-ru-p-krasivaya-modnaya-odezhda-zhenskie-instagr-44.jpg', price:3550},
    {id: '3', name: 'Костюм', description:'Двойка, серого цвета, размер s,m,l', image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666168669_42-mykaleidoscope-ru-p-krasivaya-modnaya-odezhda-zhenskie-instagr-44.jpg', price:3550},
    {id: '4', name: 'Костюм', description:'Двойка, серого цвета, размер s,m,l', image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666168669_42-mykaleidoscope-ru-p-krasivaya-modnaya-odezhda-zhenskie-instagr-44.jpg', price:3550},
    {id: '5', name: 'Костюм', description:'Двойка, серого цвета, размер s,m,l', image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666168669_42-mykaleidoscope-ru-p-krasivaya-modnaya-odezhda-zhenskie-instagr-44.jpg', price:3550}
  ]);

  const [cartItems, setCartItems] = useState<CartType[]>([])

  const addDishToCart = (catalogItem: CatalogItem) => {
    setCartItems((prevState) => {
      const existingIndex = prevState.findIndex(cartItem => {
        return cartItem.catalogItem.id === catalogItem.id;
      });

      if (existingIndex !== -1) {
        const itemsCopy = [...prevState];
        const itemCopy = {...itemsCopy[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      } else {
        return [...prevState, {catalogItem: catalogItem, amount: 1}];
      }

    });

  };
  const addCatalogItem = (catalogItem: CatalogItem) => {
    setCatalogItems(prevState => [...prevState, catalogItem])
  }

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={(
          <Catalog catalogItems={catalogItems} addToCart={addDishToCart}/>
        )}/>
        <Route path="/catalog-form" element={(
          <CatalogForm onSubmit={addCatalogItem}/>
        )}/>
        <Route path="/cart" element={(
          <Cart cartCatalogItems={cartItems}/>
        )}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
      </Routes>
    </>
  );
}

export default App;
