import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


const ProductosPage = (props) => {
  return (
    <div>
      <main className="holder productos">
        <div className="contenedor-productos">
          <h2 className="titulo-produc">Productos</h2>
          <nav className="nav-productos">
            <ul>
              <li><NavLink to="/productos" className={({isActive}) => isActive ? "activo" : undefined}>Riego</NavLink></li>
              <li><NavLink to="/pileta" className={({isActive}) => isActive ? "activo" : undefined}>Pileta</NavLink></li>
              <li><NavLink to="/bombas" className={({isActive}) => isActive ? "activo" : undefined}>Bombas</NavLink></li>
              <li><NavLink to="/ablandadores" className={({isActive}) => isActive ? "activo" : undefined}>Ablandadores</NavLink></li>
              <li><NavLink to="/jardineria" className={({isActive}) => isActive ? "activo" : undefined}>Jardineria</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="div-pileta">
          <h2>Productos de riego disponibles</h2>
          <div className='grupo-cartas'>
            
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Controlador RainBird ESP-RZXe.jpg" alt="Controlador RainBird ESP-RZXe" />
                <Card.Body>
                  <Card.Title>Controlador RainBird ESP-RZXe</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Controlador RainBird ESP-TM2.jpg" alt="Controlador RainBird ESP-TM2" />
                <Card.Body>
                  <Card.Title>Controlador RainBird ESP-TM2</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Controlador RainBird Modular ESP-Me.jpg" alt="Controlador RainBird Modular ESP-Me" />
                <Card.Body>
                  <Card.Title>Controlador RainBird Modular ESP-Me</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Electroválvula RainBird HV.jpg" alt="Electroválvula RainBird HV" />
                <Card.Body>
                  <Card.Title>Electroválvula RainBird HV</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Electroválvula RainBird PGA.jpg" alt="Electroválvula RainBird PGA" />
                <Card.Body>
                  <Card.Title>Electroválvula RainBird PGA</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Manguera de goteo Subterránea RainBird.jpg" alt="Manguera de goteo Subterránea RainBird" />
                <Card.Body>
                  <Card.Title>Manguera de goteo Subterránea RainBird</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Rotor RainBird 3500.jpg" alt="Rotor RainBird 3500" />
                <Card.Body>
                  <Card.Title>Rotor RainBird 3500</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Rotor RainBird 5004.jpg" alt="Rotor RainBird 5004" />
                <Card.Body>
                  <Card.Title>Rotor RainBird 5004</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Rotor RainBird 8005.jpg" alt="Rotor RainBird 8005" />
                <Card.Body>
                  <Card.Title>Rotor RainBird 8005</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Rotor RainBird Falcon 6504.jpg" alt="Rotor RainBird Falcon 6504" />
                <Card.Body>
                  <Card.Title>Rotor RainBird Falcon 6504</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Sensor de LLuvia RainBird.jpg" alt="Sensor de LLuvia RainBird" />
                <Card.Body>
                  <Card.Title>Sensor de LLuvia RainBird</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Stick WiFi RainBird.jpg" alt="Stick WiFi RainBird" />
                <Card.Body>
                  <Card.Title>Stick WiFi RainBird</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Tobera RainBird 1800.jpg" alt="Tobera RainBird 1800" />
                <Card.Body>
                  <Card.Title>Tobera RainBird 1800</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Tobera RainBird Uni-Spray.jpg" alt="Tobera RainBird Uni-Spray" />
                <Card.Body>
                  <Card.Title>Tobera RainBird Uni-Spray</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Solar Sinc de Hunter.jpg" alt="Solar Sinc de Hunter" />
                <Card.Body>
                  <Card.Title>Solar Sinc de Hunter</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/LLave de ajuste Hunter MP Rotator.jpg" alt="LLave de ajuste Hunter MP Rotator" />
                <Card.Body>
                  <Card.Title>LLave de ajuste Hunter MP Rotator</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/PGP-Ultra.jpg" alt="PGP-Ultra" />
                <Card.Body>
                  <Card.Title>PGP-Ultra</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/PGV-101GB.jpg" alt="PGV-101GB" />
                <Card.Body>
                  <Card.Title>PGV-101GB</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <br />
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/riego/Boquillas Rotat. RainBird.jpg" alt="Boquillas Rotat. RainBird" />
                <Card.Body>
                  <Card.Title>Boquillas Rotativas RainBird</Card.Title>
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
export default ProductosPage;