/**
 * get mark value corresponding to current slide and number of slides
 * @param targetSlide
 * @param numberOfSlides
 * @returns {number} value
 */
export const getMarkValue = (targetSlide: number, numberOfSlides: number) => {
  return Math.ceil((targetSlide * 100) / numberOfSlides);
};

/**
 * create array of Slide marks
 * @param numberOfSlides
 * @returns {Mark[]}
 */
export const getMarksFromSlideNumber = (numberOfSlides: number) => {
  return Array.from(Array(numberOfSlides).keys()).map<{
    value: number;
    label?: React.ReactNode;
  }>((s) => ({ value: getMarkValue(s, numberOfSlides) }));
};
