import { useState } from "react";

function SpidermanCharacter({
  title,
  description,
  image,
  imageSuit,
  featuredRole1,
  featuredRole2,
  featuredRole3,
}) {
  const [hover, setHover] = useState(false);
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-10 font-['Onest']">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
        {title}
      </h2>
      <img
        className="rounded-3xl md:h-[600px]"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        src={hover ? imageSuit : image}
      />
      <p className="text-white text-xl sm:text-lg md:text-xl">{description}</p>

      <section>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-5">
          Papeles destacados
        </h3>
        <ul className="flex flex-col gap-5 text-white text-xl sm:text-lg md:text-xl list-disc p-4">
          <li>{featuredRole1}</li>
          <li>{featuredRole2}</li>
          <li>{featuredRole3}</li>
        </ul>
      </section>
    </div>
  );
}

export default SpidermanCharacter;
