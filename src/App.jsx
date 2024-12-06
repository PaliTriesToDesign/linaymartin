import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <div className="mainContainer">

      <div className="envelopeContainer">
        <div className="envelopeFlap"></div>
        <div className="envelope">
        </div>
        <div className="envelopeFront">
          <p>Toca para abrir...</p>
        </div>
        <div className="envelopeBg"></div>
      </div>

      <div className="letterContainer">
        <div className="letterTop">
          <p>Lina & Martín</p>
          <FontAwesomeIcon icon={faMartiniGlass} />
          <p>Junio 21, 2024</p>
        </div>

        <div className="guestsContainer">
          <h3 className="dear">Queridos</h3>
          <h1 className="guestName">Ámbar &amp; Otto</h1>
        </div>

        <p className="intro">
          El gran día se acerca, y no podríamos estar más emocionados de compartir este momento tan especial con ustedes. Queremos que sean parte de nuestra historia y acompañarnos en una celebración que hemos preparado con todo nuestro cariño.
        </p>


      </div>

    </div>
  )
}

export default App
