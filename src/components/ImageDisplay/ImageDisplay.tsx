import { LOADING_GIF } from "@configs";
import { Image, ImageProps, Stack } from "@mantine/core";
import React, { ReactEventHandler, useState } from "react";

const ImageDisplay: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const onImageLoaded: ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true);
  };
  return (
    <>
      {!loaded && (
        <Stack h="100%" w="100%" justify="center" align="center">
          <Image w={100} src={LOADING_GIF} />
        </Stack>
      )}
      <Image
        style={loaded ? { ...props.style } : { display: "none" }}
        onLoad={onImageLoaded}
        {...props}
      />
    </>
  );
};

interface Props extends ImageProps {}

export default ImageDisplay;
