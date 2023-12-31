import { useState } from "react";
import "../ItemCount/ItemCount.css"
const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="itemCount">
                <button className="button" onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button className="button" onClick={incrementar}> + </button>


            </div>
            <button className="agregar-button" onClick={() => funcionAgregar(contador) }> Agregar al Carrito </button>

        </>
    )
}

export default ItemCount