// CREDIT TO: https://codepen.io/rokobuljan/pen/jORNEyz (https://codepen.io/rokobuljan)
import { SwiperPage } from "@components";
import { Box } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { SwiperPageInitialProps } from "./types";

import pageClasses from "../SwiperPage/SwiperPage.module.scss";
import classes from "./SwiperBook.module.scss";
import { useMatches, useSearchParams } from "react-router-dom";

const SwiperBook: React.FC<Props> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams] = useSearchParams();

  const currentPageIdx = searchParams.get("page") || "0";

  const onSwiperPageClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, idx: number) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) return;
      const pageBackClass = `.${pageClasses.back}`;
      const curr = target.closest(pageBackClass) ? idx : idx + 1;
      setCurrentPage(curr);
    },
    []
  );

  const isPageActive = (pageIdx: number) => {
    return pageIdx === currentPage;
  };

  return (
    <Box className={classes.book} style={{ "--c": currentPageIdx }}>
      {pages.map((p, idx) => (
        <SwiperPage
          key={idx}
          idx={idx}
          {...p}
          isActive={isPageActive(idx)}
          onSwiperPageClick={onSwiperPageClick}
        />
      ))}
    </Box>
  );
};

interface Props {
  pages: SwiperPageInitialProps[];
}

export default SwiperBook;
