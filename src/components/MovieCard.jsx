import { useState } from "react";

function MovieCard({ title, image, description, trailer }) {
  const [popUp, setPopUp] = useState(false);

  return (
    <article>
      {popUp && (
        <div className="fixed top-0 left-0 z-10 backdrop-blur-sm bg-[rgba(128, 128, 128, 1)] w-full h-full"></div>
      )}

      {popUp === false && (
        <div
          className="
        w-fit
        flex flex-col gap-5
        cursor-pointer
        transition-all duration-700
        hover:scale-110
        "
          onClick={() => setPopUp(true)}
        >
          <h2 className="font-['Onest'] text-4xl text-white">{title}</h2>
          <img className="w-96 h-96 rounded-3xl" src={image} />
        </div>
      )}

      {popUp && (
        <article className="z-20 p-10 rounded-3xl w-[90%] bg-black flex flex-col md:flex-row md:items-center gap-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            className="bi bi-x-circle-fill absolute top-2.5 left-2.5 cursor-pointer"
            viewBox="0 0 16 16"
            onClick={() => setPopUp(false)}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
          <article className="md:w-[50%] flex flex-col gap-5">
            <h2 className="font-['Onest'] text-2xl lg:text-4xl text-white">
              {title}
            </h2>
            <p className="font-['Onest'] text-white text-sm lg:text-xl">
              {description}
            </p>
          </article>

          <div className="w-full md:w-[50%] aspect-video">
            <iframe
              className="w-full h-full border-0"
              src={trailer}
              frameborder="0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </article>
      )}
    </article>
  );
}

export default MovieCard;
