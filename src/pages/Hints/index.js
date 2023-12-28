import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Container from "../../components/Container";
import styles from "./Hints.module.css";
import { Link } from "react-router-dom";

function Hints() {
    return (
        <>
            <Header />
            <Banner img="hints" />
            
            <section className={styles.cards}>
                <Link className={styles.link} to='/hints/asylum' ><Card  txt="Northern Undead Asylum" imagem="/images/asylum.png" /></Link>
                <Link className={styles.link} to='/hints/burgup' ><Card txt="Undead Burg" imagem="/images/undeadburg.png" /></Link>
            </section>
            <Footer />
        </>

    );
}

export default Hints;