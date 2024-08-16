import { Box } from "@mantine/core";
import classes from "./SwiperPage.module.css";

const SwiperPage: React.FC<Props> = ({ front, back }) => {
  return (
    <Box>
      {/* front */}
      <Box className={classes.front}>{front}</Box>
      {/* back */}
      <Box className={classes.back}>{back}</Box>
    </Box>
  );
};

interface Props {
  front: React.ReactElement;
  back: React.ReactElement;
}

export default SwiperPage;
