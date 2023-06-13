import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda JP</h1>
        <nav>
            <ul>
                <li>Televisores</li>
                <li>Celulares</li>
                <li>Notebooks</li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar