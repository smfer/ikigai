
import TextAnimation from '../components/TextAnimation'
import cueva from '../img/cueva.png'
import flechas from '../img/doubleRow.svg'

import {
    useRef,
    useState,
} from 'react'

export default function SceneTwo   ({ visible, onNextScene }:{
    visible: boolean
    onNextScene: (scene: number) => void
})  {
    const [stepAnimate, setStepanimate] = useState(0)
    const inAnimate = useRef(false)

    const scaleCueva: { [step: number]: string } = {
        0: '',

        1: 'scale-95',
        2: 'scale-[.85]',
        3: 'scale-[.80]',
        4: 'scale-[.75]',
        5: 'scale-[.60]',
        6: 'scale-[.80]',
    }

    return (
        <div
            className={`${
                visible ? 'visible opacity-100' : 'invisible hidden opacity-0'
            } relative h-[100vh] overflow-hidden flex flex-col bg-black transition-opacity duration-500`}
        >
                <p className=' text-white text-4xl pt-12 font-medium text-center font-Sawarabi '>Cueva de los lamentos</p>
          
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[60%] w-auto -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="relative h-full w-full">
                    <div className=' absolute top-0 left-0 h-[40%]  -translate-y-1/2 overflow-hidden  z-30'>
                        <img src={"./escena2/flecha.png"} className=' w-full scale-75 h-full object-contain ' alt="" />
                    </div>
                    <img
                        src={cueva}
                        className={`duration-800 h-full w-full object-contain brightness-[0.75] contrast-[1.002] transition-transform ${scaleCueva[stepAnimate]}`}
                        alt=""
                    />

                    <p
                        className={`${stepAnimate === 6 ? 'opacity-100' : 'opacity-0'} absolute left-1/2 top-1/2 z-40 w-[20%] -translate-x-[60%] -translate-y-1/2 overflow-hidden text-clip text-wrap text-center text-2xl font-bold text-white transition-opacity`}
                    >
                        Me falta algo
                    </p>

                    <button
                        onClick={() => {
                            
                            if (!inAnimate.current) {
                                setStepanimate((prev) => prev + 1)
                            }
                        }}
                        className={` ${scaleCueva[stepAnimate]} ${stepAnimate === 6 ? 'invisible opacity-0' : 'visible opacity-100'} absolute left-[50%] top-1/2 z-[150] h-[40%] w-[20%] -translate-x-[55%] -translate-y-1/2 cursor-pointer rounded-full font-sans  font-black text-white transition-all`}
                    >
                        Lamentarse
                    </button>
                </div>
            </div>

            <div className="font-sans absolute z-10 h-full w-full">
                <TextAnimation
                    animationDuration={'1200ms'}
                    className="absolute left-[0%] top-[5%] translate-x-[20%] translate-y-[150%] rotate-[-35deg] text-nowrap px-2 opacity-0"
                    animation={stepAnimate === 1}
                    onAnimationStart={() => {
                        inAnimate.current = true
                    }}
                    onAnimationEnd={(e) => {
                        if (e.animationName !== 'visibleOpa') return
                        inAnimate.current = false
                    }}
                >
                    siempre estoy aburrido
                </TextAnimation>
                <TextAnimation
                    animationDuration={'1200ms'}
                    className="absolute right-[0%] top-[5%] -translate-x-[50%] translate-y-[150%] rotate-[35deg] text-nowrap px-2 opacity-0"
                    animation={stepAnimate === 2}
                    onAnimationStart={() => {
                        inAnimate.current = true
                    }}
                    onAnimationEnd={(e) => {
                        if (e.animationName !== 'visibleOpa') return
                        inAnimate.current = false
                    }}
                >
                    Me siento vacio
                </TextAnimation>

                <TextAnimation
                    animationDuration={'1200ms'}
                    className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-nowrap opacity-0"
                    animation={stepAnimate === 3}
                    onAnimationStart={() => {
                        inAnimate.current = true
                    }}
                    onAnimationEnd={(e) => {
                        if (e.animationName !== 'visibleOpa') return
                        inAnimate.current = false
                    }}
                >
                    Todos los dias son iguales
                </TextAnimation>

                <TextAnimation
                    animationDuration={'1200ms'}
                    className="absolute bottom-[10%] left-[5%] -rotate-[15deg] text-nowrap opacity-0"
                    animation={stepAnimate === 4}
                    onAnimationStart={() => {
                        inAnimate.current = true
                    }}
                    onAnimationEnd={(e) => {
                        if (e.animationName !== 'visibleOpa') return
                        inAnimate.current = false
                    }}
                >
                    No tengo objetivos
                </TextAnimation>
                <TextAnimation
                    animationDuration={'1200ms'}
                    className="absolute bottom-[10%] right-[2%] rotate-[15deg] text-nowrap opacity-0"
                    animation={stepAnimate === 5}
                    onAnimationStart={() => {
                        inAnimate.current = true
                    }}
                    onAnimationEnd={(e) => {
                        if (e.animationName !== 'visibleOpa') return
                        inAnimate.current = false
                    }}
                >
                    No se que hacer con mi vida
                </TextAnimation>
            </div>

            <button
                onClick={() => onNextScene(4)}
                className={`${stepAnimate === 6 ? 'visible' : 'invisible'} absolute bottom-0 left-1/2 z-30 mb-2 h-24 -translate-x-[50%] overflow-hidden rounded-full text-white duration-700 hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3 sm:h-28 lg:h-32`}
            >
                <span className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                <img src={flechas} className="relative h-full w-full" alt="" />
            </button>
        </div>
    )
}
