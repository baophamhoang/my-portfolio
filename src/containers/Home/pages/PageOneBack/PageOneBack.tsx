import {
  Box,
  Card,
  Center,
  SimpleGrid,
  Space,
  Stack,
  ThemeIcon,
  Title
} from "@mantine/core";
import { renderComponentOrElement } from "@utils";
import { backEndListItems, CardListItem, frontEndListItems } from "./helper";
import classes from "./PageOneBack.module.scss";

const PageOneBack: React.FC = () => {
  return (
    <Box>
      <Center>
        <Title order={2}>SKILLS</Title>
      </Center>

      <Space h={"md"} />

      <Title order={4}>Front-end</Title>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {frontEndListItems.map((item) => (
          <CardItem item={item} key={item.label} />
        ))}
      </SimpleGrid>

      <Space h={"md"} />

      <Title order={4}>Back-end</Title>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {backEndListItems.map((item) => (
          <CardItem item={item} key={item.label} />
        ))}
      </SimpleGrid>

      <Space h={"md"} />
    </Box>
  );
};

const CardItem: React.FC<{ item: CardListItem }> = ({ item }) => {
  return (
    <Card className={classes.card} >
      <Stack align="center" gap={1} >
        <Box>
          <ThemeIcon size="md" variant="transparent">
            {renderComponentOrElement(item.icon)}
          </ThemeIcon>
        </Box>
        <Title order={6} >
          {item.label}
        </Title>
      </Stack>
    </Card>
  );
};

export default PageOneBack;
