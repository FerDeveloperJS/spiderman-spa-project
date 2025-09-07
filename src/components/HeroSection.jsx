import Cover3Spidermans from "../assets/images/Home/cover-3-spidermans.webp";

function HeroSection() {
  return (
    <section className="mt-5 bg-black p-4 md:pb-8 flex flex-col items-center gap-12 relative rounded-4xl">
      <div className="flex gap-3.5 flex-col items-center mt-10 lg:hidden">
        <h1 className="font-['Spiderman'] text-[#FF3535] text-4xl md:text-6xl">
          SPIDER-MAN £
        </h1>
        <img
          className="rounded-[40px] sm:w-[533px] sm:h-[300px]"
          src={Cover3Spidermans}
        />
        <div className="flex gap-2.5 justify-center flex-wrap font-['Onest'] text-sm sm:text-xl md:text-xl">
          <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
            Tobey Maguire
          </button>
          <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
            Tom Holland
          </button>
          <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
            Andrew Garfield
          </button>
        </div>
      </div>

      <p className="text-white md:mt-5 md:w-2xl sm:text-2xl md:text-2xl font-['Onest'] p-2.5 leading-7 sm:leading-10 md:leading-10 -mt-2.5 lg:hidden">
        Spider-Man, traducido en ocasiones como Hombre Araña, es un superhéroe
        de los cómics estadounidenses publicados por Marvel Comics. Creado por
        el guionista y editor Stan Lee y el artista Steve Ditko.
      </p>

      <section className="hidden lg:flex lg:items-center lg:gap-28 lg:p-5 lg:pb-12">
        <div className="flex flex-col">
          <h1 className="font-['Spiderman'] text-[#FF3535] text-4xl lg:text-6xl xl:text-7xl lg:mb-9">
            SPIDER-MAN £
          </h1>

          <p className="text-white font-['Onest'] p-2.5 leading-7 lg:leading-10 -mt-2.5 lg:text-2xl lg:w-[373px] xl:w-[420px]">
            Spider-Man, traducido en ocasiones como Hombre Araña, es un
            superhéroe de los cómics estadounidenses publicados por Marvel
            Comics. Creado por el guionista y editor Stan Lee y el artista Steve
            Ditko.
          </p>
        </div>

        <div className="flex flex-col">
          <img
            className="rounded-[40px] lg:mb-5 lg:w-[800px] xl:w-[870px]"
            src={Cover3Spidermans}
          />
          <div className="flex gap-3.5 justify-center flex-wrap font-['Onest'] text-sm lg:text-xl">
            <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
              Tobey Maguire
            </button>
            <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
              Tom Holland
            </button>
            <button className="bg-white p-1.5 rounded-2xl cursor-pointer">
              Andrew Garfield
            </button>
          </div>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#fff"
        className="bi bi-arrow-down-circle-fill absolute -bottom-3 lg:-bottom-7 left-[50%] -translate-x-1/2 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
      </svg>
    </section>
  );
}

export default HeroSection;
