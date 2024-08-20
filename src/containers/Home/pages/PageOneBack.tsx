import { Box, Code, Text, Title } from "@mantine/core";

const PageOneBack: React.FC = () => {
  return (
    <Box>
      <Title order={2}>Responsive</Title>
      <Box>
        <Text>
          Fully responsive CSS flip book, thanks to the <Code>cqmin</Code> unit.
        </Text>
      </Box>
    </Box>
  );
};

export default PageOneBack;
