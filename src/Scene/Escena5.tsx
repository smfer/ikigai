import { FC, useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

type Item =
  | { id: number; hasImage: true; src: string; text: string }
  | { id: number; hasImage: false; text: string };

const slideItems = [
  {
    id: 0,
    hasImage: true as true,
    src: "./escena5/despertando.jpeg",
    text: " Es, la razon por la que te levantas (fisica y metaforicamente)",
  },

  {
    id: 1,
    hasImage: false as false,
    text: "Es, determinacion",
  },
  {
    id: 2,
    hasImage: true as true,
    src: "./escena5/trabajando.jpeg",
    text: " Es, la razon por la que te pones a trabajar",
  },
  {
    id: 3,
    hasImage: false as false,
    text: "Es, disciplina",
  },
  {
    id: 4,
    src: "./escena5/disfrutando.jpeg",

    hasImage: true as true,
    text: "Es, la razon por la que disfrutas de cada momoento",
  },
  {
    id: 5,
    hasImage: false as false,
    text: "Es, pasciencia",
  },
];

const SlideItem: FC<{ slideItem: Item; slideIndex: number }> = ({
  slideItem,
  slideIndex,
}) => {
  return (
    <div
      className={`${slideItem.hasImage ? "flex-col" : "flex-row items-center justify-center"} ${slideItem.id === slideIndex && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"} ${slideIndex < slideItem.id && "absolute left-full top-1/2 -translate-y-1/2"} ${slideIndex > slideItem.id && "absolute left-0 top-1/2 -translate-x-full -translate-y-1/2"} flex h-56 w-72 transition-all duration-700`}
    >
      {slideItem.hasImage && (
        <img src={slideItem.src} alt="" className="flex-1" />
      )}

      <p
        className={`${slideItem.hasImage ? "flex-1 text-base" : "flex-0 text-3xl"} text-center font-sans`}
      >
        {slideItem.text}
      </p>
    </div>
  );
};

export default function SceneFive({ isVisible,onNextScene }: { isVisible: boolean,onNextScene:(scene:number)=> void }) {
  const [indexSlide, setIndexSlide] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIndexSlide((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === "ArrowRight") {
        setIndexSlide((prevIndex) =>
          Math.min(prevIndex + 1, slideItems.length )
        );
      }
    };

    // Agregar el evento
    window.addEventListener("keydown", handleKeyPress);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`${isVisible ? "block" : "hidden"} flex h-screen w-[100vw] flex-col justify-center overflow-hidden bg-black text-white`}
    >
      <div className="flex flex-1 items-center justify-center">
        {slideItems.map((item) => (
          <SlideItem slideIndex={indexSlide} slideItem={item} />
        ))}

        <div
          className={` ${6 === indexSlide && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "} ${indexSlide <6 && "absolute left-full top-1/2 -translate-y-1/2"} ${indexSlide > 6 && "absolute left-0 top-1/2 -translate-x-full -translate-y-1/2"} flex h-56 w-72 justify-center items-center transition-all duration-700`}
        >
            <button onClick={()=>onNextScene(10) }>

            <FaAngleDoubleDown className=" text-6xl duration-700 transition-transform border-2 border-white rounded-full p-4 box-content hover:scale-105 hover:-translate-y-2 text-white text-center"/>
            </button>
         
        </div>
      </div>

      <div className="bottom-4 flex gap-4 self-center py-12">
        {[...slideItems,{id:6}].map(({ id }) => (
          <button
            key={id}
            onClick={() => setIndexSlide(id)}
            className={`h-4 w-4 rounded-full transition-colors duration-500 ${
              indexSlide === id
                ? "bg-white opacity-100"
                : "bg-gray-600 opacity-60"
            }`}
            aria-label={`Go to slide ${id + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 *  <div
          className={`${indexSlide === 2 && "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden"} ${indexSlide < 2 && "absolute left-full top-1/2"} ${indexSlide > 2 && "absolute left-0 top-1/2 -translate-x-full"} h-48 w-72 -translate-y-1/2 overflow-hidden transition-all duration-700`}
        >
          <img src={Image1} alt="" className=" " />

          <p className="text-x font-serif">
            Es, la razon por la que disfrutas de cada momento de tu vida
          </p>
        </div>

        <div
          className={`${indexSlide === 3 && "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden"} ${indexSlide < 3 && "absolute left-full top-1/2"} ${indexSlide > 3 && "absolute left-0 top-1/2 -translate-x-full"} h-48 w-72 -translate-y-1/2 overflow-hidden transition-all duration-700`}
        >
          <p className="text-x font-serif">Es, Pasion</p>
        </div>

        <div
          className={`${indexSlide === 4 && "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden"} ${indexSlide < 4 && "absolute left-full top-1/2"} ${indexSlide > 4 && "absolute left-0 top-1/2 -translate-x-full"} h-48 w-72 -translate-y-1/2 overflow-hidden transition-all duration-700`}
        >
          <img src={Image1} alt="" className=" " />

          <p className="text-x font-serif">
            Es, la razon por la que pierdes la nocion del tiempo
          </p>
        </div>

        <div
          className={`${indexSlide === 5 && "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden"} ${indexSlide < 5 && "absolute left-full top-1/2"} ${indexSlide > 5 && "absolute left-0 top-1/2 -translate-x-full"} h-48 w-72 -translate-y-1/2 overflow-hidden transition-all duration-700`}
        >
          <p className="text-x font-serif">Es, Pasion</p>
        </div>
        <div
          className={`${indexSlide === 6 && "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden"} ${indexSlide < 6 && "absolute left-full top-1/2"} ${indexSlide > 6 && "absolute left-0 top-1/2 -translate-x-full"} h-48 w-72 -translate-y-1/2 overflow-hidden transition-all duration-700`}
        >
          <p className="text-x font-serif">Es, Paciencia</p>
        </div>

 */

/**
 *    <p>Es, la razon por la que trabajas </p>
      <p>Es, la razon por la que logras perseverar </p>
      <p>Es, la razon por la que logras perseverar </p>
      <p>Es, la razon por la que eres "Disciplinado" </p>
      <p>Es, la razon por la que pierdes la nocion del tiempo </p>
      <p>Es, la razon por la que disfrutas cada momento de tu vida </p>


 */
