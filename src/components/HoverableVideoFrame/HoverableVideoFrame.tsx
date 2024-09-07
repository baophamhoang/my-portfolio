import { Card, useMantineTheme } from "@mantine/core";
import { useRef, useState } from "react";
import classes from "./HoverableVideoFrame.module.scss";

const HoverableVideoFrame: React.FC<Props> = ({
  src,
  width,
  height,
  showControls = false,
}) => {
  const theme = useMantineTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <Card
      radius="md"
      withBorder
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        cursor: "pointer",
        padding: 0,
        transition: "border-color 0.2s ease-in-out",
        borderColor: isPlaying ? theme.colors.blue[5] : theme.colors.gray[8],
        borderWidth: 3,
      }}
    >
      <video
        className={classes.video}
        ref={videoRef}
        width={width || "auto"}
        height={height || "100%"}
        autoPlay={isPlaying}
        controls={showControls}
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </Card>
  );
};

interface Props {
  src: string;
  width?: number;
  height?: number;
  showControls?: boolean;
}

export default HoverableVideoFrame;
