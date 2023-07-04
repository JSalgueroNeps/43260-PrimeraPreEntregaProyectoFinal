const ItemDetail = ({ id, nombre, precio, image }) => {
  return (
    <div>
      <h2> {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <div>
        <p><strong>Descripción: </strong>
          Doble cámara y más detalles Sus 2 cámaras traseras de 13 Mpx/2 Mpx te
          permitirán tomar imágenes con más detalles y lograr efectos únicos
          como el famoso modo retrato de poca profundidad de campo. Además, el
          dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte
          divertidas selfies o hacer videollamadas.
        </p>
      </div>

      <img src={image} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
