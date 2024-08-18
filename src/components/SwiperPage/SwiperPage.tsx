import { Empty, SwiperPageProps } from "@components";
import { Box } from "@mantine/core";
import cn from "classnames";
import React from "react";
import classes from "./SwiperPage.module.scss";

const SwiperPage: React.FC<SwiperPageProps> = ({
  idx,
  front = <Empty />,
  back = <Empty />,
  isFrontCover,
  isBackCover,
  onSwiperPageClick,
}) => {
  return (
    <Box
      className={classes.page}
      style={{ "--i": idx }}
      onClick={(e) => onSwiperPageClick(e, idx)}
    >
      {/* front */}
      <Box className={cn(classes.front, { [classes.cover]: isFrontCover })}>
        {front}
      </Box>
      {/* back */}
      <Box className={cn(classes.back, { [classes.cover]: isBackCover })}>
        {back}
      </Box>
    </Box>
  );
};

export default React.memo(SwiperPage);
