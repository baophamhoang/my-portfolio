import { ImageDisplay } from "@components";
import { PORTRAIT_IMG } from "@configs";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaSquarePhoneFlip } from "react-icons/fa6";

const PageOneFront: React.FC = () => {
  return (
    <Box p={20}>
      <Stack justify="center" align="center" mt={40} gap={5}>
        <ImageDisplay
          src={PORTRAIT_IMG}
          w={200}
          radius="100"
          style={{ border: "7px solid #C5705D" }}
        />
        <Title order={1}>Pham Bao</Title>
        <Title order={3}>Software Engineer</Title>
        <Group mt={5}>
          <ActionIcon variant="gradient">
            <FaLinkedin style={{ width: "1em" }} />
          </ActionIcon>
          <ActionIcon variant="gradient">
            <MdMail style={{ width: "1em" }} />
          </ActionIcon>
          <ActionIcon variant="gradient">
            <FaSquarePhoneFlip style={{ width: "1em" }} />
          </ActionIcon>
        </Group>
      </Stack>
      <Stack mt={20}>
        <Text ta="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </Stack>
      <Stack mt={10} align="center">
        <Group>
          <Button>Explore my CV</Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default PageOneFront;
