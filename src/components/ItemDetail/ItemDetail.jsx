import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, descripcion, precio, image, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, image };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={image} alt={nombre} />
      </div>
      <div className="item-detail-text">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <p>
          <strong>Descripción: {descripcion}</strong>
        </p>

        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />

        <Link to="/">
          <button className="item-detail-button">Seguir comprando</button>
        </Link>
        <Link to="/cart" className="item-detail-button">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
