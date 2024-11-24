/*
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SceneTransicion extends React.HtmlHTMLAttributes<HTMLDivElement> {
  visible: number;
  img: string;
  onNextTransition: () => void;
}
export default function SceneTransicion({
  stepTransitioncurrent,
  visible,
  children,
  onNextTransition,
}: SceneTransicion) {
  const { ref, inView: inViewPoder } = useInView({ threshold: 1 });

  useEffect(() => {
    if (stepTransition === stepTransitioncurrent) {
    }
  }, [inViewPoder]);


  const [showImage,setShowImage]
const handleNextTransition => {
    onNextTransition()
}

  return (
    <div className={`${visible ? "flex h-screen w-full flex-col bg-black ": ""} `}>
      <div
        ref={ref}
        className={` ${visible && "flex h-[25vh] items-center justify-center bg-black text-white"}`}
      >
        {children}
      </div>
    </div>
  );
}

*/