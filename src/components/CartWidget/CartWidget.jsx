import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  const imgCarrito = "https://c8.alamy.com/zoomses/9/afb439793e0a4ded952494fbe1dc4fae/warph1.jpg"
 
  return (
      <div>
          <Link to="/cart">
              <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
              {
                  cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
              }
          </Link>
      </div>
  )
}

export default CartWidget