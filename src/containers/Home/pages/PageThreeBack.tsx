import { ImageDisplay } from "@components";
import { Anchor, Box, Divider, Text, Title } from "@mantine/core";

const PageThreeBack: React.FC = () => {
  return (
    <Box>
      <Box pos="absolute" h="100%" w="100%" style={{ zIndex: "-1" }}>
        <ImageDisplay src="https://picsum.photos/id/984/800/900" />
      </Box>
      <Title order={3}>That's all, folks</Title>
      <Box>
        <Text>FlipBook code and content:</Text>
        <Divider />
        <Anchor
          href="https://stackoverflow.com/users/383904/roko-c-buljan"
          target="_blank"
        >
          Roko C. Buljan
        </Anchor>
        <Divider />
        <Anchor
          href="https://stackoverflow.com/a/76978444/383904"
          target="_blank"
        >
          StackOverflow answer
        </Anchor>
      </Box>
    </Box>
  );
};

export default PageThreeBack;
