import { useEffect, useRef, useState } from "react";
import SceneOne from "./Scene/Escena1";
import SceneTwo from "./Scene/Escena2";
import SceneThree from "./Scene/Escena3";
import SceneFour from "./Scene/Escena4";
import SceneFive from "./Scene/Escena5";
import { FaAngleDoubleDown } from "react-icons/fa";

function App() {
  const [stepScene, setStepScene] = useState(1);
  const refReverse = useRef(false);

  useEffect(() => {
    if ([2, 4, 8, 10].includes(stepScene)) {
      scroll({ behavior: "smooth", top: window.innerHeight });
    }
    if (stepScene === 12 && !refReverse.current) {
      
      scrollTo({ behavior: "smooth", top: window.innerHeight });
      return;
    }

    if (stepScene === 12 && refReverse.current) {
      scroll({ behavior: "smooth", top: 1 })
    }
    if (stepScene === 6) {
      scroll({ behavior: "smooth", top: window.innerHeight * 5 });
    }
  }, [stepScene]);

  useEffect(() => {
    const scroll = (e: Event) => {
      if (
        window.scrollY === window.innerHeight &&
        [2, 4, 8, 10].includes(stepScene)
      ) {
        setStepScene((prev) => prev + 1);
      }



      if (window.scrollY === window.innerHeight && !refReverse.current && [12].includes(stepScene)) {
          setStepScene((prev) => prev + 1);
          refReverse.current = true;

          return;
      }


      if (window.scrollY === 1 &&refReverse.current && [12].includes(stepScene)) {

        setStepScene((prev) => prev - 1);
        refReverse.current = false;

      }

      if (
        window.scrollY === window.innerHeight * 5 &&
        [6].includes(stepScene)
      ) {
        setStepScene((prev) => prev + 1);
      }
    };

    addEventListener("scrollend", scroll);

    return () => {
      removeEventListener("scrollend", scroll);
    };
  }, [stepScene]);


  const handleNextScreen = (screne: number) => {
    setStepScene(screne);
  };

  return (
    <div className={`overflow-X-hidden relative w-screen`}>
      <SceneOne
        onNextScene={handleNextScreen}
        isVisible={stepScene >= 1 && stepScene <= 2}
      />
      <SceneTwo
        onNextScene={handleNextScreen}
        visible={stepScene >= 2 && stepScene <= 4}
      />
      <SceneThree
        onNextscene={handleNextScreen}
        visible={stepScene >= 4 && stepScene <= 6}
      />
      <SceneFour
        visible={stepScene >= 6 && stepScene <= 8}
        onNextScreen={handleNextScreen}
      />
      <SceneFive
        isVisible={stepScene >= 8 && stepScene <= 10}
        onNextScene={handleNextScreen}
      /> 
      <SceneSix
        isVisible={stepScene >= 10 && stepScene <= 13}
        onNextScreen={handleNextScreen}
      />

      <SceneSeven
        isVisible={stepScene >= 12 && stepScene <= 14}
        onNextScreen={handleNextScreen}
      />
    </div>
  );
}

const SceneSix = ({
  isVisible,
  onNextScreen,
}: {
  isVisible: boolean;
  onNextScreen: (scene: number) => void;
}) => {
  return (
    <div
      className={`${isVisible ? "flex" : "hidden"} h-screen w-screen flex-col items-center justify-center overflow-hidden  bg-[#111111] text-white`}
    >
      <div className="rounded-2xl bg-[#222222] p-6 font-sans text-white shadow-lg shadow-[#222222]/50 max-w-[100rem]">
        <h2 className="mb-4 text-center text-xl font-bold">
          ¿Cómo consigo mi Ikigai?
        </h2>
        <p className="mb-4">
          Justamente, ese es el problema. La razón por la que muchas personas
          nunca logran encontrar su *ikigai* es porque buscan algo afuera, en el
          exterior. Intentan comprarlo al primero que se los venda.
        </p>
        <p className="mb-4 font-semibold text-red-400">
          Error. Nadie puede, ni podrá, vendértelo.
        </p>
        <p className="mb-4">
          Entonces, si no se puede comprar, ¿cómo puedes tener tu *ikigai*? La
          respuesta es simple: buscándolo.
        </p>
        <p className="mb-4">
          Mira, dos de las patas del *ikigai* son:
          <span className="font-bold"> ser bueno en algo</span> y
          <span className="font-bold"> que algo te guste</span>.
        </p>
        <p className="mb-4">
          Pero quizá estés pensando: "No soy bueno en nada". Ese es el problema.
          Muchas personas creen que si algo no les gusta, o si no son buenos en
          algo de inmediato, entonces eso ya no es para ellos.
        </p>
        <p className="mb-4">
          Para encontrar algo que te guste y en lo que seas bueno, te recomiendo
          verlo de esta forma:
        </p>
        <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-4 text-black">
          <p>
            Encuentra algo que te llame la atención y pruébalo durante{" "}
            <span className="font-bold">10 horas</span>. Déjame explicarte por
            qué:
          </p>
        </div>
        <p className="mb-4">
          Después de esas 10 horas, pueden pasar tres cosas:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            Te das cuenta de que eres bueno en eso, aunque al principio no te
            agrade.
          </li>
          <li>Descubres que te agrada, pero aún no eres tan bueno.</li>
          <li>No te llama la atención y tampoco eres bueno.</li>
        </ul>
        <h3 className="mb-4 text-center text-lg font-semibold">
          La analogía de la cebolla
        </h3>
        <p className="mb-4">
          Piensa en tu *ikigai* como una cebolla. En el centro de todo está
          aquello que te gusta y en lo que eres bueno. Pero para llegar allí,
          tendrás que ir quitando muchas capas.
        </p>
        <p className="mb-4">
          Si descubres algo que no te gusta pero eres bueno en ello, si
          continúas, eventualmente encontrarás una forma de disfrutarlo y
          seguirás mejorando. A medida que mejores, lo disfrutarás más.
        </p>
        <p className="mb-4">
          Si, por el contrario, no eres bueno pero te gusta, con suficiente
          tiempo y práctica, mejorarás. Como te gusta, con dedicación será
          cuestión de tiempo para que te vuelvas bueno.
        </p>
        <p className="mb-4">
          Y si no eres bueno y tampoco te gusta, habrás descubierto algo que
          definitivamente no es para ti. Pero nunca lo sabrás si no pruebas y
          exploras las capas.
        </p>
        <p className="text-center font-semibold text-gray-400">
          ¡Empieza a explorar tus capas y encuentra tu Ikigai!
        </p>
        <div className="flex items-center justify-center pt-5">
          <button onClick={() => onNextScreen(12)}>
            <FaAngleDoubleDown className="box-content rounded-full border-2 border-white p-3 text-center text-3xl text-white transition-transform duration-700 hover:-translate-y-2 hover:scale-105" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SceneSeven = ({
  isVisible,
  onNextScreen,
}: {
  isVisible: boolean;
  onNextScreen: (scene: number) => void;
}) => {
  return (
    <div
    className={`${isVisible ? "flex" : "hidden"} h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#111111] text-white`}
  >
      <div className="rounded-2xl bg-[#222222] p-6 font-sans text-white shadow-lg shadow-[#222222]/50 max-w-[100rem]">
      <h2 className="mb-6 text-center text-xl font-bold">
          ¿Pero y por que si ya soy bueno en algo, no dsfruto de lo que hago?
        </h2>

        <p className="mb-4">
          Puede que tengas un título o que ya estés especializado en algo, pero
          si no disfrutas de lo que haces, es porque solo tienes la mitad del
          pastel. Las otras dos patas de tu *ikigai* son:
          <span className="font-bold"> lo que necesita el mundo</span> y
          <span className="font-bold">
            {" "}
            aquello por lo que el mundo está dispuesto a pagarte
          </span>
          .
        </p>

        <p className="mb-4">
          Todas las personas grandes en este mundo entendieron algo fundamental:
          guardarse sus habilidades para sí mismos sería un acto egoísta.
          Descubrieron que se vuelven aún mejores en algo a medida que ayudan a
          los demás. Entendieron que disfrutar algo viene del impacto que genera
          en otras personas.
        </p>

        <p className="mb-4">
          Pero quizá pienses: "Yo no soy una caridad, no puedo alimentarme de
          simplemente ayudar a los demás". Claro, tienes razón. Lo ideal es
          ganar dinero —otra de las patas del *ikigai*— con aquello que
          disfrutas y en lo que eres bueno. Esa es una de las razones por las
          que quienes han encontrado su *ikigai* no ven su trabajo como trabajo,
          sino como una misión.
        </p>

        <h3 className="mb-6 text-center text-lg font-semibold">
          ¿Cómo puedes lograrlo?
        </h3>

        <p className="mb-4">
          Explica, enseña y muestra tus habilidades. Pero, ¿y si no crees ser lo
          suficientemente bueno para enseñar? Bien dicen que al enseñar hay dos
          maestros: el que explica y el que aprende. No necesitas ser el mejor;
          solo necesitas estar unos pasos por delante de quienes buscas ayudar.
        </p>

        <p className="mb-4">
          Si ya descubriste algo en lo que eres bueno, intenta esto: piensa en 5
          a 7 personas que conozcas y enséñales eso que sabes. Comparte lo que
          aprendiste y cómo lo fuiste mejorando con el tiempo.
        </p>

        <div className="mb-6 border-l-4 border-red-500 bg-red-50 p-4 text-black">
          <p className="font-bold">
            Pero, ¿y qué van a decir? ¿Qué pasa si creen que no soy tan bueno?
          </p>
          <p>
            Enfócate en ayudar a personas que estén tres pasos por detrás de
            donde tú estás ahora. Pregúntate: *¿Qué me da más miedo?* ¿La
            opinión de alguien a quien intento ayudar o el hecho de no saber
            hasta dónde podría llegar si nunca lo intento?
          </p>
        </div>

        <p className="mb-4">
          Dedícate a enseñar y ayudar a los demás durante el tiempo suficiente,
          y llegará un momento en el que te despiertes y te digas a ti mismo:
          <span className="font-semibold italic">
            "¡Qué bien, ya es lunes!"
          </span>
        </p>
        <div className="flex items-center justify-center pt-5">
          <button onClick={() => onNextScreen(12)} className=" flex-1 flex justify-center items-center"  >
            <FaAngleDoubleDown className="box-content rotate-180 rounded-full border-2 border-white p-3 text-center text-3xl text-white transition-transform duration-700 hover:-translate-y-2 hover:scale-105" />
          </button>
          <button onClick={() => onNextScreen(1)}>
            ir al inicio

          </button>
        </div>
      </div>
    </div>
  );
};

/**
 *
 */
export default App;
