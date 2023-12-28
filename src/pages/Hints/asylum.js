import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import VCard from "../../components/VCard";
import styles from "./Hints.module.css";
import Container2 from "../../components/Container2";

function Asylum() {
    return (
        <>
            <Header />
            <Banner img="asylum" />

            <Container2>
                <div>
                    <VCard id="redIEFRq9yQ" />
                    <p>English ~10min</p>
                    <VCard id="1tBtXqmzPxA" />
                    <p>Português ~30min</p>
                </div>
                <div>
                    <p>Fogueiras: 2</p>
                    <p>Bosses:
                        <ul>
                            <li>Asylum Demon (2000 souls) na primeira passagem, pode ser facilmente derrotado
                                com Bomba de fogo negra caso seja escolhido na criação do personagem,
                                ou deve ser evitado fugindo pela porta à esquerda afim de encontrar armas melhores.
                                Continue explorando o mapa e ao atravesssar a fog para enfrentá-lo novamente
                                caia atacando para dar grande dano.</li>

                            <li>
                                Stray Demon (20000 souls) recomenda-se enfrentá-lo no late game. Demonio parecido com
                                Asylum Demon que solta magia. Procure um ninho de corvo nas ruínas de Firelink Shrine
                                recurve-se nele que o corvo te trará de volta ao asilo. ao acessar a segunda sala do asilo 
                                o chão cederá e será possível enfretar o boss. 
                            </li>
                        </ul>
                    </p>
                </div>
            </Container2>
            <Footer />
        </>

    );
}

export default Asylum;