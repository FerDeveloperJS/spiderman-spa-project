import VillainCard from "../VillainCard";
import GreenGoblin from "../../assets/images/Villains/green-goblin-villain-card.jpg";
import GreenBackground from "../../assets/images/Villains/green-background.avif";
import DoctorOctopus from "../../assets/images/Villains/doctor-octopus-villain-card.jpg";
import BrownBackground from "../../assets/images/Villains/brown-background.avif";
import Venom from "../../assets/images/Villains/venom-villain-card.jpg";
import VenomBackground from "../../assets/images/Villains/venom-background.avif";
import SandMan from "../../assets/images/Villains/sandman-villain-card.jpg";
import Lizard from "../../assets/images/Villains/lizard-villain-card.jpg";
import Electro from "../../assets/images/Villains/electro-villain-card.jpg";
import ThunderBoltBackground from "../../assets/images/Villains/thunderbolt-background.avif";
import Mysterio from "../../assets/images/Villains/mysterio-villain-card.jpg";
import Vulture from "../../assets/images/Villains/vulture-villain-card.jpg";
import GreyBackground from "../../assets/images/Villains/grey-background.png";
import NewGoblin from "../../assets/images/Villains/new-goblin-villain-card.jpg";

function Villains() {
  return (
    <article className="p-5">
      <h1 className="text-7xl text-white font-['Spiderman'] mb-5">VILLANOS</h1>
      <div className="p-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-14 items-center">
        <VillainCard
          title={"Duende Verde"}
          image={GreenGoblin}
          background={GreenBackground}
          difficultStars={5}
          shortDescription={
            "El Duende Verde, identidad de Norman Osborn, es un genio corrompido por un suero que lo volvió poderoso y loco. Con su planeador y bombas, aterroriza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "El Duende Verde es el alter ego de Norman Osborn, un empresario brillante y despiadado cuya obsesión por el poder lo llevó a experimentar con un suero de mejora. Aunque el experimento le otorgó fuerza sobrehumana, reflejos aumentados y una inteligencia aún más aguda, también destruyó su estabilidad mental, sumiéndolo en la locura. Desde entonces, adoptó la identidad del Duende Verde, convirtiéndose en uno de los enemigos más peligrosos y personales de Spider-Man."
          }
        />

        <VillainCard
          title={"Venom"}
          image={Venom}
          background={VenomBackground}
          difficultStars={2}
          shortDescription={
            "Venom, identidad de Eddie Brock, es un periodista corrompido por un simbionte que lo volvió poderoso y salvaje. Con su fuerza descomunal, aterroriza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "Venom surge de la unión entre el periodista Eddie Brock y un simbionte alienígena, rechazado previamente por Spider-Man. Este ente le otorga a Eddie habilidades sobrehumanas: fuerza colosal, capacidad de regeneración y una conexión psíquica con el héroe arácnido. Sin embargo, también despierta lo peor de él, potenciando su odio hacia Peter Parker, a quien culpa de arruinar su vida y su carrera."
          }
        />

        <VillainCard
          title={"Doctor Octopus"}
          image={DoctorOctopus}
          background={BrownBackground}
          difficultStars={4}
          shortDescription={
            "El Doctor Octopus, identidad de Otto Octavius, es un genio corrompido por un accidente que lo volvió peligroso y cruel. Con sus brazos metálicos, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "El Doctor Octopus es el resultado de la tragedia de Otto Octavius, un científico brillante cuyo experimento fallido lo unió a un arnés de cuatro poderosos brazos mecánicos. Estos apéndices le otorgan fuerza, velocidad y precisión sobrehumanas, además de la capacidad de escalar y destruir con facilidad. Sin embargo, la fusión también alteró su mente, transformando a un hombre antes respetado en un villano implacable."
          }
        />

        <VillainCard
          title={"Hombre de Arena"}
          image={SandMan}
          background={BrownBackground}
          difficultStars={4}
          shortDescription={
            "El Hombre de Arena, identidad de Flint Marko, es un ladrón corrompido por un accidente que lo volvió poderoso y letal. Con su cuerpo de arena, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "El Hombre de Arena, antes conocido como Flint Marko, era un ladrón común que, tras un accidente con partículas experimentales, adquirió la capacidad de transformar su cuerpo en arena. Esto le permite cambiar de tamaño, alterar su densidad, resistir ataques físicos y convertirse en un enemigo casi invulnerable. Aunque inicialmente busca poder para sus propios fines, su historia siempre está marcada por un deseo de redención y de ayudar a su familia."
          }
        />

        <VillainCard
          title={"Lagarto"}
          image={Lizard}
          background={GreenBackground}
          difficultStars={3}
          shortDescription={
            "El Lagarto, identidad de Curt Connors, es un científico corrompido por un suero que lo volvió poderoso y feroz. Con su fuerza reptil, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "El Lagarto es la trágica transformación del doctor Curt Connors, un científico brillante y amigo de Peter Parker. Obsesionado con recuperar su brazo perdido, Connors desarrolló un suero basado en el ADN de reptiles. El experimento le devolvió el miembro, pero también lo convirtió en una criatura monstruosa: un híbrido entre humano y reptil con fuerza, velocidad y una agresividad incontrolable."
          }
        />

        <VillainCard
          title={"Electro"}
          image={Electro}
          background={ThunderBoltBackground}
          difficultStars={3}
          shortDescription={
            "Electro, identidad de Max Dillon, es un trabajador corrompido por un accidente que lo volvió poderoso y letal. Con su energía eléctrica, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "Max Dillon era un trabajador de la compañía eléctrica que, tras un accidente con cables de alta tensión, se transformó en Electro. Ahora es capaz de generar, absorber y controlar energía eléctrica a niveles destructivos. Su poder le da una ventaja letal en combate, pues puede atacar a distancia, sobrecargar sistemas y electrificar todo lo que toca."
          }
        />

        <VillainCard
          title={"Mysterio"}
          image={Mysterio}
          background={GreenBackground}
          difficultStars={4}
          shortDescription={
            "Mysterio, identidad de Quentin Beck, es un ilusionista corrompido por la obsesión que lo volvió poderoso y cruel. Con sus engaños visuales, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "Quentin Beck, conocido como Mysterio, es un maestro de los efectos especiales, el ilusionismo y la manipulación psicológica. Frustrado por su falta de reconocimiento en la industria del entretenimiento, recurrió al crimen, utilizando su talento para crear ilusiones que confunden y desorientan a sus enemigos. Sus trucos lo convierten en un villano capaz de hacer creer lo imposible."
          }
        />

        <VillainCard
          title={"Buitre"}
          image={Vulture}
          background={GreyBackground}
          difficultStars={3}
          shortDescription={
            "El Buitre, identidad de Adrian Toomes, es un criminal corrompido por la ambición que lo volvió poderoso y cruel. Con su traje alado, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "Adrian Toomes es un ingeniero brillante cuya vida cambió al perder su trabajo debido a la corrupción de grandes corporaciones. Consumido por la rabia y la ambición, diseñó un traje alado que le otorga fuerza aumentada, velocidad y la capacidad de volar con gran agilidad. Bajo la identidad del Buitre, se convierte en un ladrón implacable que busca poder y riqueza."
          }
        />

        <VillainCard
          title={"Nuevo Duende"}
          image={NewGoblin}
          background={GreenBackground}
          difficultStars={3}
          shortDescription={
            "El Nuevo Duende, identidad de Harry Osborn, es un joven corrompido por la venganza que lo volvió poderoso y cruel. Con su planeador armado, amenaza a Spider-Man y a toda la ciudad."
          }
          longDescriptionParagraph1={
            "Harry Osborn, mejor amigo de Peter Parker, hereda el legado de su padre al asumir la identidad del Nuevo Duende. Motivado por la venganza tras la muerte de Norman Osborn, Harry combina la tecnología de su padre con su propio ingenio, usando un planeador más moderno y un arsenal de armas para atacar a Spider-Man."
          }
        />
      </div>
    </article>
  );
}

export default Villains;
