import React, {useState} from 'react';
import {CatalogItem, CatalogItemMutation} from "../../types";

interface Props {
  onSubmit: (catalogItem: CatalogItem) => void;
}

const CatalogForm: React.FC<Props> = ({onSubmit}) => {

  const [catalogItemMutation, setCatalogItemMutation] = useState<CatalogItemMutation>({
    name: '',
    description: '',
    image: '',
    price: ''
  });

  const changeCatalogItem = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCatalogItemMutation(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...catalogItemMutation,
      price: parseFloat(catalogItemMutation.price)
    });

    setCatalogItemMutation({
      name: '',
      description: '',
      image: '',
      price: ''
    })
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h4>Добавьте вещь</h4>
        <div className="form-group">
          <label htmlFor="name">Вид одежды</label>
          <input type="text" name="name" id="name" className="form-control" value={catalogItemMutation.name} onChange={changeCatalogItem}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Описание вещи</label>
          <textarea name="description" id="description" className="form-control" value={catalogItemMutation.description}
                    onChange={changeCatalogItem}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Фото</label>
          <input type="url" name="image" id="image" className="form-control" value={catalogItemMutation.image} onChange={changeCatalogItem}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена</label>
          <input type="number" name="price" id="price" className="form-control" value={catalogItemMutation.price}
                 onChange={changeCatalogItem}/>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CatalogForm;