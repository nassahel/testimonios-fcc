import Testimonio from "./assets/componentes/testimonio/Testimonio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de personajes Cool:</h1>
        <Testimonio
        //   nombre="Jeffery Albertson"
        //   pais="Springfied"
        //   imagen="https://www.geekmi.news/__export/1618017063891/sites/debate/img/2021/04/09/jeffalbertson1.jpg_1902800913.jpg"
        //   cargo="Vendedor de Comics"
        //   empresa="Emprendedor"
        //   testimonio="
        // Como vendedor de cómics de Los Simpson, mi trabajo es más emocionante que una pelea entre Bart y Nelson. Con una sonrisa amarilla y un montón de referencias nerds, convierto cada compra en un viaje a Springfield. ¡Nunca sabes qué personaje animado puedes encontrar en mi tienda, pero siempre garantizo risas y diversión en cada visita!"
        />

        <Testimonio
          // nombre="Coraje el perro cobarde"
          // pais="Suecia"
          // imagen="https://w0.peakpx.com/wallpaper/594/867/HD-wallpaper-courage-the-cowardly-dog-cartoon.jpg"
          // cargo="Heroe"
          // empresa="Su ciudad"
          // testimonio="En cada desafío aterrador que enfrento, demuestro que la valentía puede surgir incluso en los corazones más temerosos. Proteger a quienes amo es mi mayor motivación, superando los miedos y enfrentando los peligros con determinación."
        />

        <Testimonio
          // nombre="Darth Vader"
          // pais="Estrella de la Muerte"
          // imagen="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/10/star-wars-darth-vader-2491295.jpg?tf=3840x"
          // cargo="Conquistador de planetas"
          // empresa="El Imperio"
          // testimonio="Como Darth Vader, mi trabajo consiste en imponer el lado oscuro de la Fuerza con una determinación implacable. A través de mi presencia intimidante y mi icónico sable de luz, infundo temor en la galaxia y hago cumplir la voluntad del Imperio. Que tiemblen aquellos que se atrevan a desafiar mi autoridad."
        />
      </div>
    </div>
  );
}

export default App;
