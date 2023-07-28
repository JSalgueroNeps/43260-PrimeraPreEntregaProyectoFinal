import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cartItem-container">
      <div className="cartItem-image">
        <img src={item.image} alt={item.nombre} />
      </div>
      <div className="cartItem-info">
        <h4 className="cartItem-name">{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
      </div>
      <button
        className="cartItem-button"
        onClick={() => eliminarProducto(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
