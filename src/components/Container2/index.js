import styles from "./Container2.module.css";

function Container2({ children }) {
    return (
        <section className={styles.container2}>
            <div className={styles.vcolumn}>
                {children[0]}
            </div>
            <div className={styles.pcolumn}>
                {children[1]}
            </div>
        </section>
    );
}

export default Container2;