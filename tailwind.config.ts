// tailwind.config.js
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                visibleOpa: {
                    '0%': {
                        opacity: '0',
                        transform:
                            '  scale(0.1) translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) ',
                    },
                    '50%': {
                        opacity: '1',
                        transform:
                            '  scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) ',
                    },
                    '70%': {
                        opacity: '1',
                        transform:
                            '  scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) ',
                    },
                    '100%': {
                        opacity: '0',
                        transform:
                            '  scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) ',
                    },
                },
                brillo: {
                    "0%":  {
                       left:"0%",
                       opacity: '1',

                    },
               
                    "100%":{
                        opacity: '0',

                        left:"130%"

                    }
                }
            },

            fontFamily: {
                sans: 'Noto Sans JP',
                "Sawarabi": "Sawarabi Mincho"
            },
            colors: {
                RedCarmesí: '#e60012',
                VerdeBambú: '#88b04b',
                RosaSakura: '#fcc7c5',
                GrisNeutro: '#a9a9a9',
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme, addUtilities }) => {
            matchUtilities(
                {
                    'text-shadow': (color) => ({
                        textShadow: `0 0 16px ${color}`, // Usar variable para el color
                    }),
                },
                {
                    values: theme('colors'),
                }
            )
            matchUtilities(
                {
                    rotateX: (deg) => ({
                        transform: ` translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(${deg}) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`,
                    }),
                },
                {
                    values: {
                        '35': '35deg',
                        '60': '60deg',
                        '90': '90deg',
                        '180': '180deg',
                    },
                }
            )
            matchUtilities(
                {
                    rotateY: (deg) => ({
                        transform: ` translate(var(--tw-translate-x), var(--tw-translate-y)) rotateY(${deg}) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`,
                    }),
                },
                {
                    values: {
                        '35': '35deg',
                        '60': '60deg',
                        '90': '90deg',
                        '180': '180deg',
                    },
                }
            )
        }),
    ],
} satisfies Config
