import { FC, useState } from "react";
import { TextTransition } from "../components/TextTransition";
import bueno from "../img/escena4/Esobueno.jpeg";
import pagan from "../img/escena4/EsoPagan.jpeg";
import necesita from "../img/escena4/EsoNecesita.jpeg";
import gusta from "../img/escena4/EsoGusta.jpeg";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function SceneFour({visible,onNextScreen}:{visible:boolean,onNextScreen:(scene:number)=>void}) {
  const [stepAnimation, setStepAnimation] = useState(0);

  const handleNextTransition = (transition: number) => {
    setStepAnimation(transition);
  };

  const handleNextScreen = (scene:number)=>{
    onNextScreen(scene)
  }
  return (
    <div className={`${visible ? " flex" : "hidden " } relative  h-screen w-full flex-col items-center justify-center bg-black font-serif text-white`}>
      <div className="relative flex flex-col items-center justify-center gap-3">
        <p
          className={`text-3xl ${stepAnimation > 2 && "hidden"} ${stepAnimation === 0 ? "h-auto opacity-100" : "h-0 opacity-0"} overflow-hidden transition-all duration-[800ms]`}
        >
          Pues leyendo descubir algo
        </p>
        <button
          onClick={() => {
            setStepAnimation((prev) => prev + 1);
          }}
          className={`${stepAnimation > 2 && "hidden"} ${stepAnimation === 0 ? "h-auto px-12 py-3 opacity-100" : "h-0 px-0 py-0 opacity-0"} group relative overflow-hidden rounded-lg border-2 border-white text-2xl transition-all duration-[800ms] hover:scale-105`}
        >
          <span className="bg-white-100 invisible absolute left-0 top-0 z-10 h-[200%] w-[40%] -translate-x-full -translate-y-[30%] rotate-12 rounded-lg bg-white shadow-lg shadow-white blur-sm ease-in-out group-hover:visible group-hover:animate-[brillo_infinite_1500ms]" />
          <span className="relative z-20">???</span>
        </button>
        <TextTransition
          stepTransitionBase={1}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Ni la suerte
        </TextTransition>
        <TextTransition
          stepTransitionBase={3}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Ni el dinero
        </TextTransition>
        <TextTransition
          stepTransitionBase={5}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Ni la salud
        </TextTransition>
        <TextTransition
          stepTransitionBase={7}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Ni la genetica
        </TextTransition>
        <TextTransition
          stepTransitionBase={9}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Son capazes de darte una vida con significado
        </TextTransition>
        <TextTransition
          stepTransitionBase={11}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Si no, que estos son el resuldato de lo mismo
        </TextTransition>
        <TextTransition
          stepTransitionBase={13}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Pues entonces como??
        </TextTransition>
        <TextTransition
          className="max-w-2xl text-center"
          stepTransitionBase={15}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Como es que se puede conseguir una vida donde se puedan disfrutar de
          los lunes como si fueran domingos
        </TextTransition>
        <TextTransition
          stepTransitionBase={17}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          Pues,
        </TextTransition>
        <TextTransition
          stepTransitionBase={19}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          encontre algo, una palabra
        </TextTransition>
        <TextTransition
          stepTransitionBase={21}
          stepTransitionCurrent={stepAnimation}
          onNextTransition={handleNextTransition}
        >
          de origen japones
        </TextTransition>

        <button
          className={`${stepAnimation === 23 ? "relative h-auto opacity-100" : "absolute left-0 top-0 h-0 overflow-hidden opacity-0"} rounded-xl border-2 px-5 py-2 font-serif text-3xl text-white shadow-[0px_0px_8px_2px] shadow-white transition-all duration-[800ms] hover:-translate-y-2 hover:scale-105 hover:shadow-[0px_0px_10px_3px]`}
          onClick={() => {
            setStepAnimation((prev) => prev + 1);
          }}
        >
          Que palabra???
        </button>
      </div>

      {stepAnimation === 24 && (
        <span
          onAnimationEnd={(e) => {
            if (e.animationName === "pulse" && stepAnimation === 24) {
              setStepAnimation((prev) => prev + 1);
            }
          }}
          className={`absolute left-0 top-0 z-40 h-full w-full animate-[pulse_1.6s_4] bg-white opacity-100 ease-in-out`}
        />
      )}

      <div
        className={`${stepAnimation >= 25 ? "relative" : "absolute left-0 top-0 h-0 w-0 overflow-hidden"} z-40 flex flex-col items-center justify-center gap-6`}
      >
        <Ikigai
        onNextScreen={handleNextScreen}
          stepAnimationCurrent={stepAnimation}
          onNextStepAnimation={handleNextTransition}
        />

        <button
          onClick={() => {
            setStepAnimation((prev) => prev + 1);
          }}
          className={`${stepAnimation === 26 ? "h-auto opacity-100" : "h-0 opacity-0"} box-content overflow-hidden rounded-xl border-2 px-5 py-2 font-serif text-3xl text-white shadow-[0px_0px_8px_2px] shadow-white transition-all duration-[800ms] hover:-translate-y-2 hover:scale-105 hover:shadow-[0px_0px_10px_3px]`}
        >
          Que es eso??
        </button>
      </div>

      <div
        className={`${stepAnimation < 28 ? "invisible h-0 w-0" : "visible h-full w-full"} absolute left-0 top-0 z-20 overflow-hidden`}
      >
        <div className="relative h-full w-full">
          <div
            onTransitionEnd={(e) => {
              if (e.propertyName === "height" && stepAnimation === 28)
                setStepAnimation((prev) => prev + 1);
            }}
            className={`${stepAnimation >= 28 && stepAnimation <= 31 ? "border-white" : "border-black"} ${stepAnimation >= 28 && stepAnimation <= 31 ? "transition-[height_width] duration-[2s]" : "transition-colors duration-[1200ms]"} ${stepAnimation >= 28 ? "left-0 top-0 h-[50%] w-[50%] border-b-[8px] border-r-[8px]" : "bottom-0 left-0 h-[0%] w-[0%]"} absolute box-content overflow-hidden`}
          >
            <span className="absolute left-1/2 my-4 w-full -translate-x-1/2 text-center text-xl font-black">
              Es, eso en lo que eres bueno
            </span>
            <img src={bueno} className={`h-full w-full object-cover`} alt="" />
          </div>

          <div
            onTransitionEnd={(e) => {
              if (e.propertyName === "height" && stepAnimation === 29)
                setStepAnimation((prev) => prev + 1);
            }}
            className={`${stepAnimation >= 28 && stepAnimation <= 31 ? "border-white" : "border-black"} ${stepAnimation >= 28 && stepAnimation <= 31 ? "transition-[height_width] duration-[2s]" : "transition-colors duration-[1200ms]"} ${stepAnimation >= 29 ? "bottom-0 right-0 h-[50%] w-[50%] border-l-[8px] border-t-[8px]" : "bottom-0 right-0 h-[0%] w-[0%]"} absolute box-content overflow-hidden`}
          >
            <span className="absolute bottom-0 left-1/2 z-20 my-4 w-full -translate-x-1/2 text-center text-xl font-black">
              Es, eso que disfrutas
            </span>

            <img src={gusta} className={`h-full w-full object-cover`} alt="" />
          </div>

          <div
            onTransitionEnd={(e) => {
              if (e.propertyName === "height" && stepAnimation === 30)
                setStepAnimation((prev) => prev + 1);
            }}
            className={`${stepAnimation >= 28 && stepAnimation <= 31 ? "border-white" : "border-black"} ${stepAnimation >= 28 && stepAnimation <= 31 ? "transition-[height_width] duration-[2s]" : "transition-colors duration-[1200ms]"} ${stepAnimation >= 30 ? "right-0 top-0 h-[50%] w-[50%] border-b-[8px] border-l-[8px]" : "right-0 top-0 h-[0%] w-[0%]"} absolute box-content overflow-hidden`}
          >
            <span className="absolute left-1/2 my-4 w-full -translate-x-1/2 text-center text-xl font-black">
              Es, eso por lo que te pagan
            </span>
            <img src={pagan} className={`h-full w-full object-cover`} alt="" />
          </div>

          <div
            onTransitionEnd={(e) => {
              if (e.propertyName === "height" && stepAnimation === 31)
                setStepAnimation((prev) => prev + 1);
            }}
            className={`${stepAnimation >= 28 && stepAnimation <= 31 ? "border-white" : "border-black"} ${stepAnimation >= 28 && stepAnimation <= 31 ? "transition-[height_width] duration-[2s]" : "transition-colors duration-[1200ms]"} ${stepAnimation >= 31 ? "bottom-0 left-0 h-[50%] w-[50%] border-r-[8px] border-t-[8px]" : "bottom-0 left-0 h-[0%] w-[0%]"} absolute box-content overflow-hidden`}
          >
            <span className="absolute bottom-0 left-1/2 my-4 w-full -translate-x-1/2 text-center text-xl font-black">
              Es, eso que el mundo necesita
            </span>
            <img
              src={necesita}
              className={`h-full w-full object-cover`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Ikigai: FC<{
  stepAnimationCurrent: number;
  onNextStepAnimation: (stepAnimation: number) => void;
  onNextScreen: (screne: number) => void;

}> = ({ stepAnimationCurrent, onNextStepAnimation,onNextScreen }) => {
  const transition =
    stepAnimationCurrent === 25 ? "transition-opacity " : "transition-all ";
  const duration =
    stepAnimationCurrent === 25 ? " duration-[1200ms]" : "duration-[2s]";
  const opacity =
    stepAnimationCurrent >= 25 && stepAnimationCurrent <= 32
      ? " opacity-1"
      : " opacity-0";
  const height = (() => {
    if (stepAnimationCurrent >= 27)
      return " h-48 flex  items-center justify-center rounded-full ";
    if (stepAnimationCurrent >= 25) return " h-auto px-0 py-0 block";
    return " h-0";
  })();
  const width = (() => {
    if (stepAnimationCurrent >= 27) return " w-48";
    if (stepAnimationCurrent >= 25) return " w-auto";
    return " w-0";
  })();
  const text =
    stepAnimationCurrent >= 25 && stepAnimationCurrent <= 26
      ? "text-white"
      : "text-black";
  const bg =
    stepAnimationCurrent >= 25 && stepAnimationCurrent <= 26
      ? "bg-transparent"
      : "bg-white";

  return (
    <p
      className={`overflow-hidden font-serif text-5xl `.concat(
        ...[transition, duration, opacity, height, width, text, bg].map(
          (string) => string.concat(" ")
        )
      )}
      onTransitionEnd={(e) => {
        if (stepAnimationCurrent === 25) onNextStepAnimation(26);
        if (
          stepAnimationCurrent === 27 &&
          e.propertyName === "background-color"
        )
          onNextStepAnimation(28);
      }}
    >
      {stepAnimationCurrent >= 25 && stepAnimationCurrent <= 31 ? (
        "Ikigai"
      ) : (
        <button onClick={()=> {onNextScreen(8)}} className="flex h-full w-full items-center justify-center">
          <FaAngleDoubleDown className="text-8xl" />
        </button>
      )}
    </p>
  );
};

/**
 *      <p
                    onTransitionEnd={() => {
                        if (stepAnimation === 1)
                            setTimeout(
                                () => setStepAnimation((prev) => prev + 1),
                                300
                            )
                    }}
                    className={`text-3xl ${stepAnimation === 1 ? 'h-auto opacity-100' : 'h-0 opacity-0'}  ${stepAnimation === 1 ? 'h-auto opacity-100' : 'h-0 opacity-0'} overflow-hidden transition-all duration-[1100ms]`}
                >
                    Ni la genetica
                </p>
                <p
                    onTransitionEnd={() => {
                        if (stepAnimation === 1)
                            setTimeout(
                                () => setStepAnimation((prev) => prev + 1),
                                300
                            )
                    }}
                    className={`text-3xl ${stepAnimation === 1 ? 'h-auto opacity-100' : 'h-0 opacity-0'} overflow-hidden transition-all duration-[1100ms]`}
                >
                    Ni la herencia
                </p>
                <p
                    onTransitionEnd={() => {
                        if (stepAnimation === 1)
                            setTimeout(
                                () => setStepAnimation((prev) => prev + 1),
                                300
                            )
                    }}
                    className={`text-3xl ${stepAnimation === 1 ? 'h-auto opacity-100' : 'h-0 opacity-0'} overflow-hidden transition-all duration-[1100ms]`}
                >
                    Ni el dinero
                </p>
                <p
                    onTransitionEnd={() => {
                        if (stepAnimation === 1)
                            setTimeout(
                                () => setStepAnimation((prev) => prev + 1),
                                300
                            )
                    }}
                    className={`text-3xl ${stepAnimation === 1 ? 'h-auto opacity-100' : 'h-0 opacity-0'} overflow-hidden transition-all duration-[1100ms]`}
                >
                    es capaz de darte una vida con significado, si no que estos
                    son el resultado de lo mismo
                </p>
 */

/**
 * 
    <p></p>
    <p> ni la suerte </p>
    <p> ni el dinero </p>

    <p>son capazes de darte una vidacon significado, si no que estos son el resultado de lo mismo </p>
    <p>Pero como? saber algo no significa hacerlo</p>
    <p>Como es que se puede conseguir una vida donde se puedan dsifurtar los lunes como si fueran sabados</p>
     
    <p>Pues encontre algo</p>
    <p>una palabra</p>

 */
