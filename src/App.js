import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const [items, setItems] = useState([]);

  const articulos = [
    {id:1, title:'item1', price:120, stock:10, pictureUrl:'./image/zapa1.jpg'},
    {id:2, title:'item2', price:164, stock:15, pictureUrl:'./image/zapa2.jpg'},
    {id:3, title:'item3', price:139, stock:7, pictureUrl:'./image/zapa3.png'},
    {id:4, title:'item4', price:101, stock:9, pictureUrl:'./image/zapa4.jpg'}
  ];

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien(articulos);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <>
      <NavBar/>
      <ItemListContainer message="ESTE ES EL CONTENEDOR DE LA LISTA DE ARTICULOS" items={items} />
    </>
  );
};

export default App;