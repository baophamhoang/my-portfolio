import {
  Box,
  Center,
  List,
  ListItem,
  Space,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";

const TimelineWithProps = Timeline.withProps({
  sx: (theme) => ({
    ".mantine-Timeline-itemBullet": {
      background: theme.colors.blue[5],
    },
  }),
});

const PageTwoFront: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box>
      <Center>
        <Title order={2}>Experience</Title>
      </Center>

      <Space h={"lg"} />

      <TimelineWithProps
        color={theme.colors.blue[5]}
        active={1}
        bulletSize={24}
        lineWidth={2}
      >
        <Timeline.Item  title="JUN 2020 - AUG 2020">
          <Text size="sm">Company: Unitech</Text>
          <Text size="sm">Position: R&D Intern</Text>
          <Text size="sm">Responsibilities:</Text>
          <List size="sm">
            <ListItem>
              Examine IoT devices and systems and learn how they work.
            </ListItem>
            <ListItem>
              Doing some small projects using Image Processing and AI
            </ListItem>
          </List>
        </Timeline.Item>

        <Timeline.Item title="JUN 2020 - AUG 2020">
          <Text size="sm">Company: Datahouse Asia</Text>
          <Text size="sm">Position: Full-stack Web developer</Text>
          <Text size="sm">Responsibilities:</Text>
          <List size="sm">
            <ListItem>Participate in scrum process and meetings.</ListItem>
            <ListItem>
              Receive, analyze requirements from BA and give estimations.
            </ListItem>
            <ListItem>
              Implement UI-related features and integrate with APIs.
            </ListItem>
            <ListItem>
              Enhance coding organization, optimize app performance.
            </ListItem>
            <ListItem>
              Design database tables, implement Back-end APIs.
            </ListItem>
            <ListItem>
              Maintain, fix bugs or resolve problems if exists
            </ListItem>
          </List>
        </Timeline.Item>
      </TimelineWithProps>
    </Box>
  );
};

export default PageTwoFront;
