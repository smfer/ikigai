import suelo from '../img/suelo.png'
import bambu from '../img/bambu2.png'
import flechas from '../img/doubleRow.svg'





export default function SceneOne({onNextScene,isVisible}:{isVisible:boolean,onNextScene:(scene:number)=> void} ){
   return  <div
    className={`${isVisible ? "flex " : "hidden " } h-screen opacity-100 relative  flex-col items-start overflow-hidden text-white transition-all duration-[2s] md:items-center md:justify-center`}
>

    <a href='/about' className=' text-white absolute right-0 mx-7 my-12 group text-2xl font-sans font-semibold  top-0  z-50  '>Acerca de
        <span className=' absolute -bottom-1 transition-[width] duration-700 rounded-full left-0 h-0.5 bg-white w-0 group-hover:w-full '></span>
    
    </a>

    <div className="absolute bottom-[22%] right-0 z-30 h-[45%] translate-x-[50%] rotate-[-15deg] md:bottom-[20%] md:h-[60%] xl:h-[67%] xl:translate-x-[40%]">
        <img
            src={bambu}
            className="h-full w-full object-cover"
            alt=""
        />
    </div>
    <div className="absolute bottom-[22%] left-0 z-30 h-[45%] translate-x-[-50%] rotate-[15deg] md:bottom-[20%] md:h-[60%] xl:h-[67%] xl:translate-x-[-40%]">
        <img
            src={bambu}
            className="h-full w-full object-cover rotateY-[180deg]"
            alt=""
        />
    </div>
    <div className="absolute bottom-0 left-0 z-[1] h-[20%] w-full overflow-hidden md:h-48">
        <img
            src={suelo}
            className="h-full w-full object-cover"
            alt=""
        />
    </div>

    <span className="absolute inset-0 bg-gradient-to-b from-[#8B0000] via-[#770000] to-[#2F1B1B]" />
    <span className="absolute z-[4] h-full w-full bg-[#0000009f] opacity-40" />

    <span className="absolute left-1/2 top-[6%] z-10 box-content flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-bl from-[#e60012] via-[#b80111] to-[#5c0008] p-4 font-midorima sm:h-60 sm:w-60 md:top-[6%]">
        <p className="relative z-20  font-Sawarabi text-4xl   font-medium sm:text-7xl">
            Ikigai
        </p>
    </span>
    <p className="absolute bottom-[20%] font-sans z-10 w-full px-6 text-center  text-lg font-semibold sm:px-10 sm:text-4xl lg:bottom-[27%] xl:text-5xl">
        El secreto de japon para tener una vida con proposito
    </p>

    <button
        onClick={() => onNextScene(2)}
        className={`absolute bottom-0 left-1/2 z-10 mb-2 h-24 -translate-x-[50%] overflow-hidden rounded-full text-white duration-700 hover:-translate-y-2 hover:scale-105 hover:animate-none sm:mb-3 sm:h-28 lg:h-32`}
    >
        <span className="absolute left-1/2 top-1/2 z-[20] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <img
            src={flechas}
            className="relative z-[22] h-full w-full"
            alt=""
        />
    </button>
</div>
}