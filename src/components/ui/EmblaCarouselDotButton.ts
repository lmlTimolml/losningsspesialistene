import type { EmblaCarouselType } from 'embla-carousel';
import { cleanClass } from '../../utils/cleanClass';

export const addDotBtnsAndClickHandlers = (
  emblaApi: EmblaCarouselType,
  dotsNode: HTMLElement,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): (() => void) => {
  let dotNodes: HTMLElement[] = [];

  const addDotBtnsWithClickHandlers = (): void => {
    const dotColor = dotsNode.dataset.color || '#e3dcbf'; // fallback if missing
    const dotBorder = dotsNode.dataset.border || '#e3dcbf'; // fallback if missing

    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(
        () =>
          `<button class="embla__dot" style="--dot-color: ${cleanClass(dotColor)}; --dot-border: ${cleanClass(dotBorder)}" type="button"></button>`
      )
      .join('');

    const scrollTo = (index: number): void => {
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    };

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'));
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener('click', () => scrollTo(index), false);
    });
  };

  const toggleDotBtnsActive = (): void => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].classList.remove('embla__dot--selected');
    dotNodes[selected].classList.add('embla__dot--selected');
  };

  emblaApi
    .on('init', addDotBtnsWithClickHandlers)
    .on('reInit', addDotBtnsWithClickHandlers)
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive);

  return (): void => {
    dotsNode.innerHTML = '';
  };
};
