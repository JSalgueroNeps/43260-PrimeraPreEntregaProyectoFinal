import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, image }) => {
  return (
    <div className="card">
      <img src={image} alt={nombre} />
      <div className="container">
        <h4>{nombre}</h4>
        <p>Precio {precio} </p>
        <p>ID: {id}</p>
        <Link className="button" to={`/item/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;
