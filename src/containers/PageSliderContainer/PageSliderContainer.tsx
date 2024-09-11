import { useNavigateParams } from "@hooks/useNavigateParams";
import { Slider, Stack } from "@mantine/core";
import { findClosestSmallerBinarySearch } from "@utils/numberic";
import { getMarksFromSlideNumber, getMarkValue } from "./helper";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const NUMBER_OF_PAGES = 3;

const PageSliderContainer: React.FC = () => {
  const navigate = useNavigateParams();
  const [searchParams] = useSearchParams();
  
  const currentPageIdx = searchParams.get("page") || "0";
  const numberOfSlides = NUMBER_OF_PAGES + 1;
  const marks = getMarksFromSlideNumber(numberOfSlides);
  const marksValues = marks.map((m) => m.value);
  
  const currentPageMarkValue = getMarkValue(Number(currentPageIdx), numberOfSlides)
  const [markValue, setMarkValue] = useState(currentPageMarkValue);

  // NOTE: Since Slider's onChange callback has its own closure when holding and sliding,
  // "currentPageIdx" variable will be "trapped" in current closure and is not updated until
  // we stop holding. Function getCachedCurrentPageIdx() is to create a context that stores
  // "currentPageIdx" and update the value inside onChange callback.
  const getCachedCurrentPageIdx = (() => {
    let cachedCurrentPageIdx = currentPageIdx;
    return () => {
      return {
        setCachedCurrentPageIdx: (pageIdx: string) => {
          cachedCurrentPageIdx = pageIdx;
        },
        cachedCurrentPageIdx,
      };
    };
  })();

  const onSlide = (val: number) => {
    const { setCachedCurrentPageIdx, cachedCurrentPageIdx } =
      getCachedCurrentPageIdx();
    setMarkValue(val)

    const currentMarkIdx = marks
      .findIndex((m) => {
        const closestSmallerPageIndex = findClosestSmallerBinarySearch(
          marksValues,
          val
        );
        return m.value === closestSmallerPageIndex;
      })
      .toString();

    if (currentMarkIdx !== cachedCurrentPageIdx) {
      setCachedCurrentPageIdx(currentMarkIdx);
      navigate("", { page: currentMarkIdx });
    }
  };
  return (
    <Stack
      pos="fixed"
      sx={{
        bottom: 20,
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "240px",
      }}
    >
      <Slider value={markValue} c="blue" marks={marks} onChange={onSlide} />
    </Stack>
  );
};

export default PageSliderContainer;
