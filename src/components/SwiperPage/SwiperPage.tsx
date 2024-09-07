import { Empty, SwiperPageProps } from "@components";
import { Box, useMantineTheme } from "@mantine/core";
import cn from "classnames";
import React from "react";
import classes from "./SwiperPage.module.scss";
import { renderComponentOrElement } from "@utils";

const SwiperPage: React.FC<SwiperPageProps> = ({
  idx,
  front = <Empty />,
  back = <Empty />,
  isFrontCover,
  isBackCover,
  onSwiperPageClick,
}) => {
  const { colors } = useMantineTheme();
  return (
    <Box
      className={classes.page}
      style={{ "--i": idx }}
      onClick={(e) => onSwiperPageClick(e, idx)}
    >
      {/* front */}
      <Box
        className={cn(classes.front, { [classes.cover]: isFrontCover })}
        style={{
          borderColor: colors.blue[5],
        }}
      >
        <>{renderComponentOrElement(front)}</>
      </Box>
      {/* back */}
      <Box
        className={cn(classes.back, { [classes.cover]: isBackCover })}
        style={{
          borderColor: colors.blue[5],
        }}
      >
        <>{renderComponentOrElement(back)}</>
      </Box>
    </Box>
  );
};

export default React.memo(SwiperPage);
