import { Box, LoadingOverlay } from "@mantine/core";

const LoadingContainer: React.FC = () => {
  return (
    <Box pos="relative" h='100%'>
      <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      {/* ...other content */}
    </Box>
  );
};

export default LoadingContainer