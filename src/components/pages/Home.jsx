import HeroSection from "../HeroSection";
import SpidermanCharacter from "../SpidermanCharacter";
import AndrewGarfield from "../../assets/images/Home/andrew-garfield.avif";
import AndrewGarfieldSuit from "../../assets/images/Home/andrew-garfield-suit.jpg";
import TomHolland from "../../assets/images/Home/tom-holland.jpg";
import TomHollandSuit from "../../assets/images/Home/tom-holland-suit.webp";
import TobeyMaguire from "../../assets/images/Home/tobey-maguire.jpg";
import TobeyMaguireSuit from "../../assets/images/Home/tobey-maguire-suit.webp";

function Home() {
  return (
    <div className="p-4">
      <section className="flex flex-col gap-14">
        <SpidermanCharacter
          title={"Andrew Garfield"}
          description={
            "Andrew Garfield es un actor anglo-estadounidense nacido el 20 de agosto de 1983 en Los Ángeles, California, aunque creció en Inglaterra. Es conocido por su versatilidad interpretativa y su capacidad para transmitir gran carga emocional en sus papeles. Se formó como actor en la Royal Central School of Speech and Drama de Londres y empezó su carrera en el teatro y la televisión británica antes de dar el salto al cine internacional."
          }
          image={AndrewGarfield}
          imageSuit={AndrewGarfieldSuit}
          featuredRole1={
            "Spider-Man / Peter Parker en The Amazing Spider-Man (2012) y su secuela (2014), rol que lo hizo mundialmente famoso."
          }
          featuredRole2={
            "Desmond Doss en Hacksaw Ridge (2016), actuación que le valió una nominación al Óscar."
          }
          featuredRole3={
            "Su papel en la miniserie Tick, Tick… Boom! (2021), que también le dio una nominación al Óscar y un Globo de Oro."
          }
        />

        <SpidermanCharacter
          title={"Tom Holland"}
          description={
            "Tom Holland es un actor y bailarín británico nacido el 1 de junio de 1996 en Kingston upon Thames, Inglaterra. Desde joven mostró talento para las artes escénicas, formándose en danza y actuación. Su gran oportunidad llegó con el musical Billy Elliot en el West End de Londres, donde interpretó al protagonista, mostrando su disciplina y energía en el escenario."
          }
          image={TomHolland}
          imageSuit={TomHollandSuit}
          featuredRole1={
            "Peter Parker / Spider-Man en el Universo Cinematográfico de Marvel, debutando en Captain America: Civil War (2016) y protagonizando la trilogía Spider-Man: Homecoming (2017), Far From Home (2019) y No Way Home (2021)."
          }
          featuredRole2={
            "Lucas Bennett en The Impossible (2012), donde interpretó a un niño atrapado con su familia en el tsunami de Tailandia, actuación que lo lanzó al cine internacional."
          }
          featuredRole3={
            "Nathan Drake en Uncharted (2022), adaptación del popular videojuego, donde mostró su faceta aventurera y carismática."
          }
        />

        <SpidermanCharacter
          title={"Tobey Maguire"}
          description={
            "Tobey Maguire es un actor y productor estadounidense nacido el 27 de junio de 1975 en Santa Mónica, California. Desde joven mostró interés por la actuación y comenzó con papeles pequeños en series y películas durante los años 90, hasta que su talento y carisma lo llevaron a consolidarse en Hollywood. Su formación fue principalmente práctica, trabajando con directores de renombre y puliendo su estilo interpretativo, caracterizado por su sencillez, expresividad y vulnerabilidad emocional en pantalla."
          }
          image={TobeyMaguire}
          imageSuit={TobeyMaguireSuit}
          featuredRole1={
            "Peter Parker / Spider-Man en la trilogía dirigida por Sam Raimi (Spider-Man 2002, Spider-Man 2 2004 y Spider-Man 3 2007), rol icónico que lo convirtió en una figura mundialmente famosa."
          }
          featuredRole2={
            "Su participación en Spider-Man: No Way Home (2021), que marcó su regreso triunfal al papel que lo hizo un ícono."
          }
          featuredRole3={
            "Nick Carraway en The Great Gatsby (2013), adaptación de la novela de F. Scott Fitzgerald junto a Leonardo DiCaprio."
          }
        />
      </section>
    </div>
  );
}

export default Home;
