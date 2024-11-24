/*import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import  flechas  from "../img/doubleRow.svg";

export default function ImageTransition({
    stepTransition,
    stepTransitionCurrent,
  onNextStepAnimation,
  src,
}: {
  stepTransition: number;
  stepTransitionCurrent: number;
  onNextStepAnimation: () => void;
  src: string;
}) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const nextStepTransition= stepTransition+1

  useEffect(()=>{
    if(inView)
    onNextStepAnimation()
  })

  return (
    <div className={`relative h-[75vh]`}>
      <img
      ref={ref}
        className={` ${inView || stepTransitionCurrent === 20 || stepTransitionCurrent === nextStepTransition ? "w-full" : "w-0"} absolute right-0 z-10 h-full object-cover transition-[width] duration-[1500ms]`}
        onTransitionEnd={(e) => {
          console.log(e.propertyName === "width" && stepAnimation === 20);
          if (e.propertyName === "width" && stepAnimation === 20) {
            setStepAnimation((prev) => prev + 1);
          }
        }}
        src={src}
        alt=""
      />

      <button
       
        className={`${stepTransitionCurrent === 21 ? "h-24 opacity-100 sm:h-28 lg:h-32" : "h-0 overflow-hidden opacity-0"} ${stepTransitionCurrent === 21 ? "duration-700" : "duration-[300ms]"} absolute bottom-0 left-1/2 z-20 mb-2 -translate-x-1/2 overflow-hidden rounded-full text-white hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3`}
      >
        <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <img src={flechas} className="relative z-[22] h-full w-full" alt="" />
      </button>
    </div>
  );
}
*/