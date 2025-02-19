'use client';

import { RefObject, useEffect } from 'react';

type AnimatedElementsTypes =
  | HTMLDivElement
  | HTMLButtonElement
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLImageElement // Adicionar tipo do elemento se não estiver aqui
  | HTMLSpanElement;

type ObserverInput = {
  setIsVisible: (
    states: boolean[] | ((prevStates: boolean[]) => boolean[]),
  ) => void;
  isVisible: boolean[];
  animatedElementsRef: RefObject<(AnimatedElementsTypes | null)[]>;
  thresholds?: (number | undefined)[];
};

// Lida com o observer para as animações de scroll
const HandleObserver = ({
  setIsVisible,
  isVisible,
  animatedElementsRef,
  thresholds, // Porcentagem necessaria para o elemento aparecer (ex: [1, 0.5, 0.3] -> 100% do primeiro elemento, 50% do segundo e 30% do terceiro). Valor padrão é 0.6 (60%)
}: ObserverInput) => {
  useEffect(() => {
    const elements = animatedElementsRef.current;

    elements!.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible((prevStates) => {
                  const newStates = [...prevStates];
                  newStates[index] = true;
                  return newStates;
                });
              }
            });
          },
          { threshold: (thresholds ? thresholds[index] : 0.6) || 0.6 },
        );

        observer.observe(ref);

        return () => {
          if (ref) observer.unobserve(ref);
        };
      }
    });
  }, [animatedElementsRef, isVisible, setIsVisible, thresholds]);
};

export { HandleObserver };
export type { AnimatedElementsTypes };
