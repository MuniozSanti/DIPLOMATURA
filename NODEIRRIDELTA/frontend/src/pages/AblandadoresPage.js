import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const AblandadoresPage = (props) => {
  return (
    <div>
      <main className="holder productos">
        <div className="contenedor-productos">
          <h2 className="titulo-produc">Productos</h2>
          <nav className="nav-productos">
            <ul>
              <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined}>Riego</NavLink></li>
              <li><NavLink to="/pileta" className={({ isActive }) => isActive ? "activo" : undefined}>Pileta</NavLink></li>
              <li><NavLink to="/bombas" className={({ isActive }) => isActive ? "activo" : undefined}>Bombas</NavLink></li>
              <li><NavLink to="/ablandadores" className={({ isActive }) => isActive ? "activo" : undefined}>Ablandadores</NavLink></li>
              <li><NavLink to="/jardineria" className={({ isActive }) => isActive ? "activo" : undefined}>Jardineria</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="div-pileta">
          <h2>Ablandadores disponibles</h2>

          <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/ablandadores/Ablandador de Agua Vulcano Spl..jpg" alt="Ablandador de Agua Vulcano Spl" />
                <Card.Body>
                  <Card.Title>Ablandador de Agua Vulcano Spl</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/ablandadores/Ablandador de Agua Vulcano.jpg" alt="Ablandador de Agua Vulcano" />
                <Card.Body>
                  <Card.Title>Ablandador de Agua Vulcano</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/ablandadores/ABLANDADOR ELEKTRIM HF2100.jpg" alt="ABLANDADOR ELEKTRIM HF2100" />
                <Card.Body>
                  <Card.Title className="card-title">ABLANDADOR ELEKTRIM HF2100</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/ablandadores/ABLANDADOR ELEKTRIM HF2500.jpg" alt="ABLANDADOR ELEKTRIM HF2500" />
                <Card.Body>
                  <Card.Title>ABLANDADOR ELEKTRIM HF2500</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/ablandadores/KIT MEDIDOR DE DUREZA.jpg" alt="KIT MEDIDOR DE DUREZA" />
                <Card.Body>
                  <Card.Title>KIT MEDIDOR DE DUREZA</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
        </div>
      </main>
    </div>
  );
}
export default AblandadoresPage;