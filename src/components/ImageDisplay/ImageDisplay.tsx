import LoadingContainer from "@containers/StartupContainer/LoadingContainer";
import { Box, Image, ImageProps } from "@mantine/core";
import React, { ReactEventHandler, useState } from "react";

const ImageDisplay: React.FC<ImageProps> = (props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const onImageLoaded: ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true);
  };
  return (
    <>
      {!loaded && (
        <Box h="100%">
          <LoadingContainer />
        </Box>
      )}
      <Image
        style={loaded ? { ...props.style } : { display: "none" }}
        onLoad={onImageLoaded}
        {...props}
      />
    </>
  );
};

export default ImageDisplay;
