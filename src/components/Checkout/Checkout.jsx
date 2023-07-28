import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    setError(null);
  };

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email deben ser iguales.");
      return;
    }

    if (carrito.length === 0) {
      setError("Debe agregar al menos un item al carrito.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        limpiarFormulario();
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden, vamos a morir!!");
      });
  };

  return (
    <div className="checkout-container">
      <h2> Checkout </h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre}. Precio {producto.item.precio} x{" "}
              {producto.cantidad}{" "}
            </p>
            <p> Total producto: $ {producto.item.precio * producto.cantidad}</p>
            <hr />
          </div>
        ))}
        <p>Precio total de la compra: ${total}</p>
        <hr />

        <div className="form-group">
          <label htmlFor=""> Nombre </label>
          <input
            type="text"
            className="form-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Apellido </label>
          <input
            type="text"
            className="form-input"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Telefono </label>
          <input
            type="text"
            className="form-input"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email </label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email Confirmación </label>
          <input
            type="email"
            className="form-input"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}
        <Link to="/">
          <button className="seguir-button">Seguir comprando</button>
        </Link>

        <button type="submit" className="submit-button">
          Finalizar Compra
        </button>
      </form>
      {ordenId && (
        <strong>
          ¡Gracias por tu compra! Tu número de orden es {ordenId}{" "}
        </strong>
      )}
    </div>
  );
};

export default Checkout;
