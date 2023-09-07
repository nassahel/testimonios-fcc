import React from "react";
import './Testimonio.css';
import './personas'

 function Testimonio() {



  return (

    personas.map((person) => {

      return <div className="conenedor-testimonio">
        <img className="imagen-testimonio" src={`${person.imagen}`} alt="foto de..." />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"> <b>{person.nombre} </b> en {person.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <b>{person.empresa}</b>  </p>
          <p className="texto-testimonio">"{person.testimonio}"</p>
        </div>
      </div>
    })

      
    );
}

export default Testimonio;