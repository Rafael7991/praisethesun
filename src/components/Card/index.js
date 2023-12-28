import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

function Card({ txt, imagem }) {
    return (
        
            
                <div className={styles.card}>
                    <img src={imagem} alt="Imagem do Card" className={styles.cardImage} />
                    <p className={styles.cardText}>{`${txt}`}</p>
                </div>
            
        
    )
}

export default Card;