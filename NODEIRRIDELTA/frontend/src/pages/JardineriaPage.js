import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const JardineriaPage = (props) => {
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
          <h2>Productos de jardinería disponibles</h2>
          <div className='grupo-cartas'>
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/520-BAG-PLUS.jpg" alt="Cortacesped Sensei" />
                <Card.Body>
                  <Card.Title>Cortacesped Sensei</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/BRS-520-Frontal.jpg" alt="Motoguadaña Sensei" />
                <Card.Body>
                  <Card.Title>Motoguadaña Sensei</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/CS-250.jpg" alt="Motosierra Sensei 250" />
                <Card.Body>
                  <Card.Title>Motosierra Sensei 250</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/CS-380.jpg" alt="Motosierra Sensei 380" />
                <Card.Body>
                  <Card.Title>Motoguadaña Sensei 380</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/518771.jpg" alt="Mochila pulverizadora Oregon" />
                <Card.Body>
                  <Card.Title>Mochila pulverizadora Oregon</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/MD-630.jpg" alt="Mochila pulverizadora a explosión Sensei" />
                <Card.Body>
                  <Card.Title>Mochila pulverizadora a explosión Sensei</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/Felco 5.jpg" alt="Tijera de poda Felco 5" />
                <Card.Body>
                  <Card.Title>Tijera de poda Felco 5</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/felco160L.jpg" alt="Tijera de poda Felco 160L" />
                <Card.Body>
                  <Card.Title>Tijera de poda Felco 160L</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/TR-260-Frontal.jpg" alt="Bordeadora de jardín Sensei" />
                <Card.Body>
                  <Card.Title>Bordeadora de jardín Sensei</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/jarrdineria/HT-626-DiagonalAtr-ís.jpg" alt="Cortacerco Sensei" />
                <Card.Body>
                  <Card.Title>Cortacerco Sensei</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
          </div>
        </div>
      </main>

    </div>
  );
}
export default JardineriaPage;