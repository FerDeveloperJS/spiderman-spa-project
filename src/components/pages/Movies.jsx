import MovieCard from "../MovieCard";
import Spiderman1 from "../../assets/images/Movies/spiderman-1.jpg";
import Spiderman2 from "../../assets/images/Movies/spiderman-2.jpg";
import SpidermanHomeComing from "../../assets/images/Movies/spiderman-homecoming.jpg";
import SpidermanNoWayHome from "../../assets/images/Movies/spiderman-no-way-home.jpg";
import TheAmazingSpiderman1 from "../../assets/images/Movies/the-amazing-spiderman-1.jpg";
import TheAmazingSpiderman2 from "../../assets/images/Movies/the-amazing-spiderman-2.jpg";

function Movies() {
  return (
    <article className="p-5">
      <h1 className="text-7xl text-white font-['Spiderman'] mb-5">PeLiCuLaS</h1>
      <div className="p-5 flex gap-10 gap-y-24 flex-wrap justify-around items-center">
        <MovieCard
          title={"Spiderman 1"}
          image={Spiderman1}
          description={
            "La primera película dirigida por Sam Raimi con Tobey Maguire. El tímido estudiante Peter Parker adquiere poderes extraordinarios tras ser mordido por una araña genéticamente modificada. Pronto descubre que puede trepar muros, lanzar telarañas y posee una fuerza y agilidad sobrehumanas. Sin embargo, tras sufrir una dolorosa pérdida personal, entiende que 'un gran poder conlleva una gran responsabilidad'."
          }
          trailer={
            "https://www.youtube.com/embed/t06RUxPbp_c?si=PnkPD8rB2abxjqM7"
          }
        />

        <MovieCard
          title={"Spiderman 2"}
          image={Spiderman2}
          description={
            "La segunda entrega de Sam Raimi con Tobey Maguire. Peter Parker intenta equilibrar su vida como estudiante y héroe, pero el peso de sus responsabilidades lo lleva a plantearse abandonar su identidad secreta. Todo se complica cuando el brillante científico Otto Octavius, tras un fallido experimento, se transforma en el temible Doctor Octopus. Peter deberá enfrentarlo mientras lucha con sus sentimientos por Mary Jane y la constante presión de ser Spider-Man."
          }
          trailer={
            "https://www.youtube.com/embed/1s9Yln0YwCw?si=5xUsAePaHShmWFNq"
          }
        />

        <MovieCard
          title={"Spiderman HomeComing"}
          image={SpidermanHomeComing}
          description={
            "La primera película en solitario de Spider-Man dentro del Universo Cinematográfico de Marvel, protagonizada por Tom Holland. Tras los eventos de Civil War, Peter Parker intenta demostrar que puede ser un verdadero héroe mientras equilibra su vida de estudiante. Bajo la tutela de Tony Stark, enfrenta al villano Adrian Toomes, mejor conocido como el Buitre, quien trafica armas creadas con tecnología alienígena. Peter aprenderá que ser Spider-Man implica mucho más que solo tener un traje."
          }
          trailer={
            "https://www.youtube.com/embed/rk-dF1lIbIg?si=fSR999Tz3Gq3PREn"
          }
        />

        <MovieCard
          title={"Spiderman No Way Home"}
          image={SpidermanNoWayHome}
          description={
            "La tercera película de Tom Holland como Spider-Man en el Universo Cinematográfico de Marvel. Tras la revelación de su identidad secreta al mundo, Peter Parker busca la ayuda del Doctor Strange para revertir la situación. Pero un hechizo fallido provoca la llegada de villanos de otros universos, incluyendo al Duende Verde, Doctor Octopus y Electro. Con la ayuda inesperada de aliados de realidades distintas, Peter deberá enfrentar el mayor desafío de su vida y comprender lo que realmente significa ser Spider-Man."
          }
          trailer={
            "https://www.youtube.com/embed/JfVOs4VSpmA?si=ep6825gmBTa5I4pa"
          }
        />

        <MovieCard
          title={"The Amazing Spiderman 1"}
          image={TheAmazingSpiderman1}
          description={
            "La primera película de la nueva versión dirigida por Marc Webb, con Andrew Garfield como Peter Parker. El joven estudiante busca respuestas sobre la misteriosa desaparición de sus padres, lo que lo lleva a ser mordido por una araña modificada genéticamente. Pronto descubre sus increíbles habilidades, pero su vida cambia cuando debe enfrentarse al Dr. Curt Connors, transformado en el peligroso Lagarto. Peter aprenderá que sus poderes están ligados a una gran responsabilidad y a sacrificios inevitables."
          }
          trailer={
            "https://www.youtube.com/embed/-tnxzJ0SSOw?si=YlOWNIul6-Ga_Kwt"
          }
        />

        <MovieCard
          title={"The Amazing Spiderman 2"}
          image={TheAmazingSpiderman2}
          description={
            "La segunda película de Marc Webb con Andrew Garfield como Peter Parker. Tras asumir plenamente su rol como Spider-Man, Peter disfruta ser el héroe de Nueva York, pero su vida personal se complica con su relación con Gwen Stacy y los secretos de Oscorp. Cuando surge el poderoso villano Electro, la ciudad se convierte en un campo de batalla. Además, un viejo amigo, Harry Osborn, regresa con oscuros planes que cambiarán el destino de Peter para siempre. Esta historia lo enfrenta a dolorosas pérdidas y difíciles decisiones."
          }
          trailer={
            "https://www.youtube.com/embed/DlM2CWNTQ84?si=ILF_rbJtGkzMfZH9"
          }
        />
      </div>
    </article>
  );
}

export default Movies;
