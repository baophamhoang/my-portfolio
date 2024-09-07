import { HoverableVideoFrame } from "@components";
import { VI_FOOTBALL, VI_MOVIES, VI_RUNNING, VI_TRAVELING } from "@configs";
import {
  Box,
  Center,
  SimpleGrid,
  Space,
  Text,
  Timeline,
  Title,
  useMantineTheme
} from "@mantine/core";

const TimelineWithProps = Timeline.withProps({
  sx: (theme) => ({
    ".mantine-Timeline-itemBullet": {
      background: theme.colors.blue[5],
    },
  }),
});

const PageTwoBack: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box>
      <Center>
        <Title order={2}>Education</Title>
      </Center>

      <Space h={"md"} />

      <TimelineWithProps
        color={theme.colors.blue[5]}
        active={1}
        bulletSize={24}
        lineWidth={2}
      >
        <Timeline.Item title="2016 - 2021">
          <Text size="sm">Computer Engineering major,</Text>
          <Text size="sm">Electronics & Telecommunications Engineering,</Text>
          <Text size="sm">Da Nang University of Technology</Text>
        </Timeline.Item>
      </TimelineWithProps>

      <Space h={"md"} />

      <Center>
        <Title order={2}>Hobbies</Title>
      </Center>

      <Space h={"md"} />

      <SimpleGrid cols={{base: 1, md: 2}}>
        <HoverableVideoFrame height={150} src={VI_FOOTBALL} />
        <HoverableVideoFrame height={150} src={VI_RUNNING} />
        <HoverableVideoFrame height={150} src={VI_MOVIES} />
        <HoverableVideoFrame height={150} src={VI_TRAVELING} />
      </SimpleGrid>
    </Box>
  );
};

export default PageTwoBack;
