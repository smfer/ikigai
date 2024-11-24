import vida from "../img/vida.jpg";
import trabajo from "../img/trabajo.png";
import amigos from "../img/amigos.jpeg";
import festivales from "../img/festivales.jpeg";

import flechas from "../img/doubleRow.svg";
import genetica from "../img/genetica.jpeg";
import poder from "../img/poder.jpeg";
import dinero from "../img/dinero.jpeg";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SceneThree({
  visible,
  onNextscene,
}: {
  visible: boolean;
  onNextscene: (scene: number) => void;
}) {
  const [stepAnimation, setStepAnimation] = useState(0);
  const idTimeout = useRef<number>();

  const { ref: refSuerte, inView: inViewSuerte } = useInView({ threshold: 0.8 });
  const { ref: refGenetica, inView: inViewGenetica } = useInView({
    threshold: 0.8,
  });
  const { ref: refRiqueza, inView: inViewRiqueza } = useInView({
    threshold: 0.8,
  });
  const { ref: refPoder, inView: inViewPoder } = useInView({ threshold: 0.8 });

  console.log("inViewSuerte",inViewSuerte)
  console.log("stepAnimation",stepAnimation)


  useEffect(() => {
    console.log(stepAnimation === 13 , inViewSuerte)
    if (stepAnimation === 13 && inViewSuerte) {
      setStepAnimation(14);
    }

  
    if (stepAnimation === 15 && inViewGenetica) {
      setStepAnimation(16);
    }
    if (stepAnimation === 17 && inViewRiqueza) {
      setStepAnimation(18);
    }
    if (stepAnimation === 19 && inViewPoder) {
      setStepAnimation(20);
    }
    
  }, [stepAnimation, inViewSuerte, inViewGenetica, inViewRiqueza, inViewPoder]);

  const { ref: refSuerteImg, inView: inViewSuerteImg } = useInView({
    threshold: 0.8,
  });
  const { ref: refGeneticaImg, inView: inViewGeneticaImg } = useInView({
    threshold: 0.8,
  });
  const { ref: refRiquezaImg, inView: inViewRiquezaImg } = useInView({
    threshold: 0.8,
  });
  const { ref: refPoderImg, inView: inViewPoderImg } = useInView({
    threshold: 0.8,
  });


  useEffect(() => {
  
      
    if (stepAnimation === 14 && inViewSuerteImg) {
      setTimeout(() => setStepAnimation(15), 400);
    }
    if (stepAnimation === 16 && inViewGeneticaImg) {

      setTimeout(() => setStepAnimation(17), 400);
    }
    if (stepAnimation === 18 && inViewRiquezaImg) {
      setTimeout(() => setStepAnimation(19), 400);
    }
    if (stepAnimation === 20 && inViewPoderImg) {
      setTimeout(() => setStepAnimation(21), 400);
    }

    
  }, [
    stepAnimation,
    inViewSuerteImg,
    inViewGeneticaImg,
    inViewPoderImg,
    inViewRiquezaImg,
  ]);


  return (
    <>
      <div
        className={`${visible ? "flex" : "hidden"} flex-col  relative h-screen w-full overflow-hidden bg-black ${stepAnimation <= 4 && "flex items-center justify-center"} transition-[height] duration-1000 ${stepAnimation >= 6 && "flex "}`}
      >
        {stepAnimation < 6 && (
          <div
            className={`visible relative z-30 flex flex-col gap-2 text-white opacity-100 transition-all duration-200 ${stepAnimation >= 4 && "hidden"}`}
          >
            <p className="max-w-xl justify-center font-sans overflow-hidden text-wrap  text-center  text-2xl py-4 font-medium text-white">
              Nunca te has preguntado{" "}
              {stepAnimation === 0 &&
                "por que algunas personas disfrutan mas de su vida"}
              {stepAnimation === 1 &&
                "por que algunas personas disfrutan mas de su trabajo"}
              {stepAnimation === 2 &&
                "por que algunas personas disfrutan mas de sus relaciones"}
              {stepAnimation === 3 && "como es que logran disfrutar los lunes"}
              {stepAnimation === 3 && " como si fuera un sabado"}
            </p>
            <div className={`flex w-full flex-row justify-center gap-8`}>
              <div className="relative  basis-24 hover:scale-105 hover:-translate-y-2 transition-transform duration-500">
                <button
                  className="relative z-10 w-full  bg-gradient-to-b from-red-600 rounded-lg to-red-800 px-6 py-2 text-2xl font-black"
                  onClick={() => setStepAnimation((prev) => prev + 1)}
                >
                  Si
                  <div className="absolute opacity-100 left-1/2 top-1/2 -z-20 box-content h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-b from-red-600 to-red-900 p-1  blur-md" />
                </button>
              </div>

              <div className="relative  basis-24 hover:scale-105 hover:-translate-y-2 transition-transform duration-500">
                <button
                  className="relative z-10 w-full  bg-gradient-to-b from-red-600 rounded-lg to-red-800 px-6 py-2 text-2xl font-black"
                  onClick={() => setStepAnimation((prev) => prev + 1)}
                >
                  No
                  <div className="absolute opacity-100 left-1/2 top-1/2 -z-20 box-content h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-b from-red-600 to-red-900 p-1  blur-md" />
                </button>
              </div>
            </div>
          </div>
        )}

        {stepAnimation < 6 && (
          <div
            className={`relative left-0 top-0 z-20 flex h-full w-full flex-row overflow-hidden`}
          >
            <img
              className={` ${stepAnimation >= 1 && stepAnimation < 5 ? "h-full" : "h-0"} ${stepAnimation === 5 ? "[transition:_filter_300ms,height_1000ms]" : "[transition:_filter_700ms,height_1800ms]"} w-[25%] object-cover object-left grayscale hover:grayscale-0`}
              src={vida}
              alt=""
            />
            <img
              className={` ${stepAnimation >= 2 && stepAnimation < 5 ? "h-full" : "h-0"} ${stepAnimation === 5 ? "[transition:_filter_300ms,height_1000ms]" : "[transition:_filter_700ms,height_1800ms]"} w-[25%] object-cover object-center grayscale transition-[filter_height] hover:grayscale-0`}
              src={trabajo}
              alt=""
            />
            <img
              className={` ${stepAnimation >= 3 && stepAnimation < 5 ? "h-full" : "h-0"} ${stepAnimation === 5 ? "[transition:_filter_300ms,height_1000ms]" : "[transition:_filter_700ms,height_1800ms]"} w-[25%] object-cover object-center grayscale transition-[filter_height] hover:grayscale-0`}
              src={amigos}
              alt=""
            />
            <img
              className={` ${stepAnimation >= 4 && stepAnimation < 5 ? "h-full" : "h-0"} ${stepAnimation === 5 ? "[transition:_filter_300ms,height_1000ms]" : "[transition:_filter_700ms,height_1800ms]"} w-[25%] object-cover object-center grayscale transition-[filter_height] hover:grayscale-0`}
              src={festivales}
              alt=""
              onTransitionEnd={(e) => {
                if (e.propertyName === "height" && stepAnimation === 4)
                  idTimeout.current = setTimeout(() => {
                    setStepAnimation(5);
                  }, 1200);

                if (e.propertyName === "height" && stepAnimation === 5)
                  idTimeout.current = setTimeout(() => {
                    setStepAnimation(6);
                  }, 200);
              }}
            />
          </div>
        )}

        {stepAnimation >= 5 && (
          <>
            <div
              className={`flex flex-1 font-sans flex-col items-center justify-center text-white`}
            >
              <p
                onTransitionEnd={(e) => {
                  if (e.propertyName === "opacity" && stepAnimation === 6) {
                    setTimeout(() => setStepAnimation(7), 200);
                  }
                  if (e.propertyName === "opacity" && stepAnimation === 8) {
                    setTimeout(() => setStepAnimation(9), 300);
                  }
                }}
                className={`${stepAnimation >= 6 && stepAnimation <= 7 ? "opacity-100" : "h-0 opacity-0"} transition-[opacity_height] ${stepAnimation === 6 ? "duration-[800ms]" : "duration-[300ms]"}  text-4xl font-medium`}
              >
                Pues yo si
              </p>
              <button
                onClick={() => {
                  scroll({
                    behavior: "smooth",
                    top: window.innerHeight * 2.2,
                  });
                  setStepAnimation(8);
                }}
                className={`${stepAnimation === 7 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepAnimation === 7 ? "duration-700" : "duration-[300ms]"} relative z-10 mb-2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
              >
                <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                <img
                  src={flechas}
                  className="relative z-[22] h-full w-full"
                  alt=""
                />
              </button>

              <p
                onTransitionEnd={(e) => {
                  if (e.propertyName === "opacity" && stepAnimation === 9) {
                    setTimeout(() => setStepAnimation(10), 300);
                  }
                }}
                className={`${stepAnimation >= 9 && stepAnimation <= 9 ? "h-auto opacity-100" : "h-0 opacity-0"} max-w-xl text-center  text-3xl font-semibold transition-opacity ${stepAnimation === 9 ? "duration-[2000ms]" : "duration-[500ms]"}`}
              >
                Tengo 17 años y hace 1 año, no he parado de preguntarme
              </p>
              <p
                onTransitionEnd={(e) => {
                  if (e.propertyName == "opacity" && stepAnimation === 10)
                    setTimeout(() => setStepAnimation(11), 300);
                }}
                className={`${stepAnimation >= 10 && stepAnimation <= 10 ? "h-auto opacity-100" : "h-0 opacity-0"} max-w-2xl text-center text-3xl font-semibold transition-opacity ${stepAnimation === 10 ? "duration-[2000ms]" : "duration-[500ms]"}`}
              >
                Cómo es que existen personas capaces de levantarse con unas
                ganas inmensas de trabajar en sus vidas
              </p>
              <p
                onTransitionEnd={(e) => {
                  if (e.propertyName == "opacity" && stepAnimation === 11)
                    return setTimeout(() => setStepAnimation(12), 300);
                }}
                className={`${stepAnimation >= 11 && stepAnimation <= 11 ? "opacity-100" : "h-0 opacity-0"} max-w-2xl text-center text-3xl font-semibold transition-[opacity_height] ${stepAnimation === 11 ? "duration-[2000ms]" : "duration-[500ms]"}`}
              >
                Cómo es que hay personas que logran perseverar con sus objetivos
                pese a cualquier dificultad
              </p>

              <p
                onTransitionEnd={(e) => {
                  if (e.propertyName == "opacity" && stepAnimation === 12)
                    return setTimeout(() => setStepAnimation(13), 300);
                }}
                className={`${stepAnimation >= 12 && stepAnimation <= 12 ? "h-auto opacity-100" : "h-0 opacity-0"} max-w-2xl text-center text-3xl font-semibold transition-opacity duration-[2000ms]`}
              >
                duda, miedo o desgracias
              </p>

              <p
                className={`${stepAnimation >= 13 ? "h-auto opacity-100" : "h-0 opacity-0"}   max-w-2xl text-center text-3xl font-semibold transition-opacity duration-[2000ms]`}
              >
                Pero ¿cómo?, ¿cómo es que se consigue una vida llena de
                propósito?
              </p>
            </div>
          </>
        )}
      </div>

      {stepAnimation >= 13 && (
        <div className={`${visible ? "flex" : "hidden"}  flex h-screen w-full flex-col bg-black`}>
          <div
            ref={refSuerte}
            className={` ${stepAnimation >= 13 && "flex h-[25vh] items-center justify-center bg-black text-white"}`}
          >
            <p className=" font-Sawarabi text-7xl font-medium">Suerte??</p>
          </div>
          <div className={`relative h-[75vh]`}>
            <img
              className={` ${stepAnimation === 14 || stepAnimation === 15 || inViewSuerte ? "w-full" : "w-0"} z-10 h-full object-cover transition-[width] duration-[1500ms]`}
              src={"./escena3/suerte.jpeg"}
              ref={refSuerteImg}
              alt=""
            />

            <button
              className={`${stepAnimation === 15 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepAnimation === 15 ? "duration-700" : "duration-[300ms]"} absolute bottom-0 left-1/2 z-20 mb-2 -translate-x-1/2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
            >
              <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <img
                src={flechas}
                className="relative z-[22] h-full w-full"
                alt=""
              />
            </button>
          </div>
        </div>
      )}

      {stepAnimation >= 15 && (
        <div className={`${visible ? "flex" : "hidden"}  flex h-screen w-full flex-col bg-black`}>
          <div
            ref={refGenetica}
            className={` ${stepAnimation >= 15 && "flex h-[25vh] items-center justify-center bg-black text-white"}`}
          >
            <p className="font-serif text-7xl font-semibold">Genetica??</p>
          </div>
          <div className={`relative h-[75vh]`}>
            <img
              className={` ${stepAnimation === 17 || stepAnimation === 16 || inViewGenetica ? "w-full" : "w-0"} absolute right-0 z-10 h-full object-cover transition-[width] duration-[1500ms]`}
              ref={refGeneticaImg}
              src={genetica}
              alt=""
            />

            <button
              className={`${stepAnimation === 17 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepAnimation === 17 ? "duration-700" : "duration-[300ms]"} absolute bottom-0 left-1/2 z-20 mb-2 -translate-x-1/2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
            >
              <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <img
                src={flechas}
                className="relative z-[22] h-full w-full"
                alt=""
              />
            </button>
          </div>
        </div>
      )}
      {stepAnimation >= 17 && (
        <div className={`${visible ? "flex" : "hidden"}  flex h-screen w-full flex-col bg-black`}>
          <div
            ref={refRiqueza}
            className={` ${stepAnimation >= 17 && "flex h-[25vh] items-center justify-center bg-black text-white"}`}
          >
            <p className="font-serif text-7xl font-semibold">Dinero??</p>
          </div>
          <div className={`relative h-[75vh]`}>
            <img
              className={` ${inViewRiqueza || stepAnimation === 18 || stepAnimation === 19 ? "w-full object-cover" : "w-0"} z-10 h-full transition-[width] duration-[1500ms]`}
              ref={refRiquezaImg}
              src={dinero}
              alt=""
            />

            <button
              className={`${stepAnimation === 19 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepAnimation === 19 ? "duration-700" : "duration-[300ms]"} absolute bottom-0 left-1/2 z-20 mb-2 -translate-x-1/2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
            >
              <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <img
                src={flechas}
                className="relative z-[22] h-full w-full"
                alt=""
              />
            </button>
          </div>
        </div>
      )}
      {stepAnimation >= 19 && (
        <div className={`${visible ? "flex" : "hidden"}  flex h-screen w-full flex-col bg-black`}>
          <div
            ref={refPoder}
            className={` ${stepAnimation >= 19 && "flex h-[25vh] items-center justify-center bg-black text-white"}`}
          >
            <p className="font-serif text-7xl font-semibold">Poder??</p>
          </div>
          <div className={`relative h-[75vh]`}>
            <img
              className={` ${inViewPoder || stepAnimation === 20 || stepAnimation === 21 ? "w-full" : "w-0"} absolute right-0 z-10 h-full object-cover transition-[width] duration-[1500ms]`}
              ref={refPoderImg}
              src={poder}
              alt=""
            />

            <button
              onClick={() => {
                onNextscene(6);
              }}
              className={`${stepAnimation === 21 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepAnimation === 21 ? "duration-700" : "duration-[300ms]"} absolute bottom-0 left-1/2 z-20 mb-2 -translate-x-1/2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
            >
              <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <img
                src={flechas}
                className="relative z-[22] h-full w-full"
                alt=""
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/*
<div
    className={`${
        visible ? 'visible' : 'invisible'
    } relative ${stepAnimation === 5 ? 'h-[120vh]' : 'h-screen'} overflow -hidden bg-black`}
>
    <div
        className={`${stepAnimation <= 6 ? 'flex' : 'hidden'} flex h-full w-full flex-col items-center justify-center gap-5 text-white`}
    >
        <div
            className={` ${stepAnimation < 4 ? 'flex' : 'hidden'} z-30 flex flex-col items-center justify-center gap-2`}
        >
            <p className="max-w-md justify-center overflow-hidden text-wrap text-center font-serif text-2xl font-semibold">
                Nunca te has preguntado{' '}
                {stepAnimation === 0 &&
                    'por que algunas personas disfrutan mas de su vida'}
                {stepAnimation === 1 && 'disfrutar mas de su trabajo'}
                {stepAnimation === 2 && 'disfrutar mas de sus relaciones'}
                {stepAnimation === 3 &&
                    'como es que logran disfrutar los lunes'}
                {stepAnimation === 3 && ' como si fuera un sabado'}
            </p>

            <div className={`flex w-full flex-row justify-center gap-8`}>
                <div className="relative flex-1">
                    <button
                        className="relative z-10 w-full rounded-lg bg-gradient-to-b from-red-700 to-red-800 px-6 py-5 text-2xl font-black"
                        onClick={() => setStepAnimation((prev) => prev + 1)}
                    >
                        Si
                        <div className="absolute left-1/2 top-1/2 -z-20 box-content h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-b from-red-500 to-red-800 p-2 opacity-45 blur-sm" />
                        <div className="absolute left-0 top-0 -z-10 box-content h-[100%] w-[100%] rounded-lg bg-gradient-to-b from-red-600 to-red-800" />
                    </button>
                </div>

                <div className="relative flex-1">
                    <button
                        className="relative z-10 w-full rounded-lg bg-gradient-to-b from-red-700 to-red-800 px-6 py-5 text-2xl font-black"
                        onClick={() => setStepAnimation((prev) => prev + 1)}
                    >
                        No
                        <div className="absolute left-1/2 top-1/2 -z-20 box-content h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-b from-red-500 to-red-800 p-2 opacity-45 blur-sm" />
                        <div className="absolute left-0 top-0 -z-10 box-content h-[100%] w-[100%] rounded-lg bg-gradient-to-b from-red-600 to-red-800" />
                    </button>
                </div>
            </div>
        </div>

        <div
            className={`absolute left-0 top-0 z-20 flex h-full w-full flex-row overflow-hidden`}
        >
            <img
                className={` ${stepAnimation >= 1 && stepAnimation < 5 ? 'h-full' : 'h-0'} w-[25%] object-cover object-center grayscale transition-[filter_height] duration-[2s] hover:grayscale-0`}
                src={vida}
                alt=""
            />
            <img
                className={` ${stepAnimation >= 2 && stepAnimation < 5 ? 'h-full' : 'h-0'} w-[25%] object-cover object-center grayscale transition-[filter_height] duration-[2s] hover:grayscale-0`}
                src={vida}
                alt=""
            />
            <img
                className={` ${stepAnimation >= 3 && stepAnimation < 5 ? 'h-full' : 'h-0'} w-[25%] object-cover object-center grayscale transition-[filter_height] duration-[2s] hover:grayscale-0`}
                src={vida}
                alt=""
            />
            <img
                className={` ${stepAnimation >= 4 && stepAnimation < 5 ? 'h-full' : 'h-0'} w-[25%] object-cover object-center grayscale transition-[filter_height] duration-[2s] hover:grayscale-0`}
                src={vida}
                alt=""
            />
        </div>
    </div>

    <div
        className={`${stepAnimation < 6 ? 'hidden' : 'block'} relative h-full w-full text-white`}
    >
        pues yo si
    </div>
    <span className={`h-[20vh] w-full`} />
</div>

*/
