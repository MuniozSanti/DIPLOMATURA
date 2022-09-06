import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <a className="logo"><img src="Imagenes/Logo irridelta2.jpeg" alt="Logo Irridelta" /></a>

            <nav className="menu">
                <div className="holder-menu">
                    <ul className="main-menu">
                        <li className="activo"><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                        <li><NavLink to="novedades" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                        <li><NavLink to="productos" className={({isActive}) => isActive ? "activo" : undefined}>Productos</NavLink></li>
                        <li><NavLink to="contacto" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                        <li> <a  href="https://www.instagram.com/irridelta/?hl=es" target="_blank"><img className="ig-icono" alt="icono ig"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg==" /></a></li>
                        <li> <a href="https://es-la.facebook.com/people/Irridelta/100064054083065/" target='_blank'> <img className="fbk-icono" alt="icono fb"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtlIEJwjAQRV836AY6ghtUJ9EROoJOoCO4ghvoBDqCbuAGlQ8JHGo9UhJUaKBw0Ob/+4+7VhQ+VWF9fs5gCmyBGaBa5wTM+0ikJJDgGaifxLIZ7IHlm06zGRyBJhgcgBVw94YkBVFnxDbA2hPX+68bCMMkdGo7Fi49cYpi/RLKS2C59xH5iCuHwcKkSU6wC0uli3GCVN+Aa1BrgUuORfvPKbLJxwTu4o+IXESDPvB+FYNE7aXiBg+0MykZNmDKCAAAAABJRU5ErkJggg==" /></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;