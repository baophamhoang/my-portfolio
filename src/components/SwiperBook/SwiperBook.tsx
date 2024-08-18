// CREDIT TO: https://codepen.io/rokobuljan/pen/jORNEyz (https://codepen.io/rokobuljan)
import { SwiperPage } from "@components";
import { Box } from "@mantine/core";
import { useCallback, useState } from "react";
import classes from "./SwiperBook.module.scss";
import { SwiperPageInitialProps } from "./types";

const SwiperBook: React.FC<Props> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onSwiperPageClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, idx: number) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) return;
      const curr = target.closest(".back") ? idx : idx + 1;
      setCurrentPage(curr);
    },
    []
  );

  return (
    <Box className={classes.book} style={{ "--c": currentPage }}>
      {pages.map((p, idx) => (
        <SwiperPage
          idx={idx}
          {...p}
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
