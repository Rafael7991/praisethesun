import styles from "./VCard.module.css";

function VCard({ id }) {
    return (
        <section className={styles.VCard} >
            <a
                href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener"
                target="_blank"
            >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"></img>
            </a>
        </section>
    );
}

export default VCard;