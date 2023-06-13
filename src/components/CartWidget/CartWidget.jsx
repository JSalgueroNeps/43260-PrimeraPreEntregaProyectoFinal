import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://c8.alamy.com/zoomses/9/afb439793e0a4ded952494fbe1dc4fae/warph1.jpg"
  
    return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="carrito" />
        <strong>1</strong>
    </div>
    
  )
}

export default CartWidget