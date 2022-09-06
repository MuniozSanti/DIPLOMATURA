import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const PiletaPage = (props) => {
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
                    <h2>Productos de pileta disponibles</h2>

                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Accesorios de Mantenimiento para Piscinas.jpg" alt="Accesorios de Mantenimiento para Piscinas" />
                            <Card.Body>
                                <Card.Title>Accesorios de Mantenimiento para Piscinas</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Accesorios para Inst. Eléctrica Vulcano.jpg" alt="Accesorios para Inst. Eléctrica Vulcano" />
                            <Card.Body>
                                <Card.Title>Accesorios para Inst. Eléctrica Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Artefacto de LED Lumipool Vulcano.jpg" alt="Artefacto de LED Lumipool Vulcano" />
                            <Card.Body>
                                <Card.Title>Artefacto de LED Lumipool Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Artefacto PowerLED Vulcano.jpg" alt="Artefacto PowerLED Vulcano" />
                            <Card.Body>
                                <Card.Title>Artefacto PowerLED Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Filtro Lacus FL40.jpg" alt="Filtro Lacus FL40" />
                            <Card.Body>
                                <Card.Title>Filtro Lacus FL40</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Filtro Vulcano Línea VC.jpg" alt="Filtro Vulcano Línea VC" />
                            <Card.Body>
                                <Card.Title>Filtro Vulcano Línea VC</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Luz RGB para Cascadas Vulcano.jpg" alt="Luz RGB para Cascadas Vulcano" />
                            <Card.Body>
                                <Card.Title>Luz RGB para Cascadas Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Retorno Orientable Lacus.jpg" alt="Retorno Orientable Lacus" />
                            <Card.Body>
                                <Card.Title>Retorno Orientable Lacus</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Retorno Orientable Vulcano.jpg" alt="Retorno Orientable Vulcano" />
                            <Card.Body>
                                <Card.Title>Retorno Orientable Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Skimmer Lacus.jpg" alt="Skimmer Lacus" />
                            <Card.Body>
                                <Card.Title>Skimmer Lacus</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Skimmer Vulcano Boca chica.jpg" alt="Skimmer Vulcano Boca chica" />
                            <Card.Body>
                                <Card.Title>Skimmer Vulcano Boca chica</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Soplador para Hidromasaje Vulcano.jpg" alt="Soplador para Hidromasaje Vulcano" />
                            <Card.Body>
                                <Card.Title>Soplador para Hidromasaje Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Toma de Fondo Lacus.jpg" alt="Toma de Fondo Lacus" />
                            <Card.Body>
                                <Card.Title>Toma de Fondo Lacus</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="imagenes/img pileta/Toma de Fondo Vulcano.jpg" alt="Toma de Fondo Vulcano" />
                            <Card.Body>
                                <Card.Title>Toma de Fondo Vulcano</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br/>
                    
                
                </div>
            </main>

        </div>
    );
}
export default PiletaPage;