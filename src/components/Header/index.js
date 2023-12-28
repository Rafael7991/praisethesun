/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className={styles.header}>
            <Link to='/'>
                <img src='../../../images/logo.png' alt='logo'></img>
         
            </Link>
            <nav>
                <Link to='/'>
                    Página Inicial
                </Link>
                <a href="#1"></a>
                <Link to='/hints'>Guias e dicas</Link>
            </nav>
        </header>
    );
}

export default Header;