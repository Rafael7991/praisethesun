import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";

function Home() {
  return (
    <>
      <Header />
      <Banner img="ds1" />
      <Container>
        <p className="font1">In the Age of Ancients the world was unformed, shrouded by fog. A land of gray crags, Archtrees and Everlasting Dragons. But then there was Fire and with fire came disparity. Heat and cold, life and death, and of course, light and dark. Then from the dark, They came, and found the Souls of Lords within the flame. Nito, the First of the Dead, The Witch of Izalith and her Daughters of Chaos, Gwyn, the Lord of Sunlight, and his faithful knights. And the Furtive Pygmy, so easily forgotten.
          With the strength of Lords, they challenged the Dragons. Gwyn's mighty bolts peeled apart their stone scales. The Witches weaved great firestorms. Nito unleashed a miasma of death and disease. And Seath the Scaleless betrayed his own, and the Dragons were no more.
          Thus began the Age of Fire. But soon the flames will fade and only Dark will remain. Even now there are only embers, and man sees not light, but only endless nights. And amongst the living are seen, carriers of the accursed Darksign.
          Yes, indeed. The Darksign brands the Undead. And in this land, the Undead are corralled and led to the north, where they are locked away, to await the end of the world... This is your fate.
          Only, in the ancient legends it is stated, that one day an undead shall be chosen to leave the undead asylum, in pilgrimage, to the land of ancient lords, Lordran.</p>
      </Container>
      <Footer />
    </>

  );
}

export default Home;
