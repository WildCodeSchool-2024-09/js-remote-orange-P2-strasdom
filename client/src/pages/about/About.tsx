import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./about.css";

function About() {
  return (
    <div>
      <Header />
      <div>
        <div className="aboutus-container">
          <div className="aboutus-card">
            <h1>Meet Alex and Nico 👋</h1>
            <br />
            <p>
              Bienvenue sur notre site ! Nous sommes Alex et Nico, deux jeunes
              développeurs passionnés, chacun avec ses particularités, mais unis
              par une même envie : créer des expériences numériques qui sortent
              du lot. Voici un peu plus sur qui nous sommes :
            </p>
            <br />
            <p>👨‍💻 Alex : Le papa breton passionné</p>
            <br />
            <p>
              Alex, c’est un développeur qui jongle avec talent entre sa vie de
              papa et ses lignes de code. Amoureux de la Bretagne, il s’inspire
              de ses paysages pour nourrir sa créativité. Fan inconditionnel de
              bande dessinée, il a toujours une nouvelle histoire graphique à
              partager ou un héros préféré à faire découvrir. Lorsqu’il n’est
              pas devant son écran, vous pourriez le croiser sur un terrain de
              sport, où il se dépense avec la même énergie qu’il met dans ses
              projets.
            </p>
            <br />
            <p>🎸 Nico : L’artiste au clavier (et à la basse)</p>
            <br />
            <p>
              Nico, de son côté, est un développeur avec une âme d’artiste. En
              plus de coder des interfaces modernes et fonctionnelles, il
              excelle à écrire des textes de chansons qui résonnent. Passionné
              de musique, il joue de la basse et trouve son inspiration dans les
              univers riches de jeux comme Final Fantasy 14. Pour lui, le
              développement, c’est comme une mélodie bien composée : chaque
              élément doit trouver sa place pour créer une harmonie parfaite.
            </p>
            <br />
            <p>🖥️ Notre mission</p>
            <br />
            <p>
              Ce qui nous unit, c’est notre amour du code et l’envie de donner
              vie à des projets numériques qui font sens. Nous croyons qu’un
              site web ou une application ne devrait pas seulement être
              fonctionnel, mais aussi raconter une histoire, la vôtre.
            </p>
            <br />
            <p>
              ous aimons ce que nous faisons, et nous sommes ravis de partager
              notre aventure avec vous. Que vous soyez ici pour découvrir nos
              services, ou simplement pour en savoir plus sur nous, sachez que
              vous êtes au bon endroit.
            </p>
            <br />
            <p>
              Ensemble, nous mettons notre créativité et nos compétences au
              service de vos idées. Vous avez un projet ? Parlons-en ! 🚀
            </p>
            <br />
            <p>
              Un petit mot pour nous ? Contactez-nous directement, nous sommes
              toujours ouverts aux nouvelles collaborations et aux discussions
              passionnées. 😊
            </p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
