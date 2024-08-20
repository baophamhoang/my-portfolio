import { ImageDisplay } from "@components";
import { Box, Text, Title } from "@mantine/core";

const PageOneFront: React.FC = () => {
  return (
    <Box>
      <Box pos="absolute" h="100%" w="100%" style={{ zIndex: "-1" }}>
        <ImageDisplay src="https://picsum.photos/id/984/800/900" />
      </Box>
      <Title order={1}>Test ne</Title>
      <Box>
        <Text>2024.Second edition</Text>
      </Box>
    </Box>
  );
};

export default PageOneFront;
