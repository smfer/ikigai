interface PropTextTransition
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  onNextTransition: (transition: number) => void;
  stepTransitionBase: number;
  stepTransitionCurrent: number;
}

export const TextTransition = ({
  children,
  onNextTransition,
  stepTransitionCurrent,
  stepTransitionBase,
  className,
  ...rest
}: PropTextTransition) => {
  const nextStepTransition = stepTransitionBase + 1;

  const durationStart = "duration-[800ms]";
  const durationOn =700;
  const durationEnd = "duration-[400ms]";


  const position = stepTransitionCurrent >= stepTransitionBase&&   stepTransitionCurrent <= nextStepTransition ? " relative " : " absolute top-0 left-0 "
  const opacity =
    stepTransitionCurrent === stepTransitionBase ? "opacity-100" : "opacity-0";
  const height =
    stepTransitionCurrent === stepTransitionBase ||
    stepTransitionCurrent === nextStepTransition
      ? "h-auto"
      : "h-0";
  const duration =
    stepTransitionCurrent === stepTransitionBase ? durationStart : durationEnd;

  return (
    <p
      onTransitionEnd={() => {
        if (stepTransitionCurrent === stepTransitionBase) {
          setTimeout(() => {
            onNextTransition(nextStepTransition);
          }),
            durationOn;
        }
        if (stepTransitionCurrent === nextStepTransition) {
          onNextTransition(nextStepTransition + 1);
        }
      }}
      className={`overflow-hidden text-3xl transition-all`.concat(
        " " + duration + " ",
        " " + height + " ",
        " " + opacity + " ",position+ " "+className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
