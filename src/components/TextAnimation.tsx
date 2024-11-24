import {
    HTMLAttributes,
    ReactNode,
} from 'react'


interface PropstTextAnimation extends HTMLAttributes<HTMLParagraphElement> {
    onAnimationEnd?: (e: React.AnimationEvent<HTMLParagraphElement>) => void
    animation: boolean
    animationDuration: string
    children: ReactNode | ReactNode[]
}

export default function  ({
    onAnimationEnd,
    animationDuration,
    animation,
    children,
    className,
    ...rest
}:PropstTextAnimation)  {
    return (
        <p
            style={{ animationDuration }}
            {...rest}
            onAnimationEnd={onAnimationEnd}
            className={
                `${animation && 'animate-[visibleOpa_ease-out_1] '} absolute inline-block text-2xl font-semibold text-white text-shadow-white` +
                className
            }
        >
            {children}
        </p>
    )
}
