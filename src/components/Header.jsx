import { useState } from "react";

function Header({ setCurrentPage }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <header className="p-5 flex justify-between items-center">
      <h3 className="font-['Spiderman'] text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#FF4C4C]">
        SPA SPIDERMAN @ By Fer
      </h3>

      <nav className="font-['Spiderman'] text-white hidden md:flex md:items-center md:justify-between w-[40%] text-xl lg:text-3xl xl:text-4xl">
        <button
          className="
          cursor-pointer
          transition-all duration-100 ease-in-out
          hover:scale-110
          "
          onClick={() => setCurrentPage("Home")}
        >
          HOME
        </button>
        <button
          className="
          cursor-pointer
          transition-all duration-100 ease-in-out
          hover:scale-110
          "
          onClick={() => setCurrentPage("Villains")}
        >
          VILLANOS
        </button>
        <button
          className="
          cursor-pointer
          transition-all duration-100 ease-in-out
          hover:scale-110
          "
          onClick={() => setCurrentPage("Movies")}
        >
          PELICULAS
        </button>
      </nav>

      {burgerMenu && (
        <nav className="p-5 text-white bg-gray-800 flex flex-col gap-5 text-xl md:hidden absolute z-50 top-0 right-0 h-screen w-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
            onClick={() => setBurgerMenu(false)}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
          <button
            className="font-['Spiderman']"
            onClick={() => {
              setCurrentPage("Home");
              setBurgerMenu(false);
            }}
          >
            HOME
          </button>
          <button
            className="font-['Spiderman']"
            onClick={() => {
              setCurrentPage("Villains");
              setBurgerMenu(false);
            }}
          >
            VILLANOS
          </button>
          <button
            className="font-['Spiderman']"
            onClick={() => {
              setCurrentPage("Movies");
              setBurgerMenu(false);
            }}
          >
            PELICULAS
          </button>
        </nav>
      )}

      {burgerMenu === false && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          className="bi bi-list sm:scale-150 md:hidden"
          viewBox="0 0 16 16"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      )}
    </header>
  );
}

export default Header;
