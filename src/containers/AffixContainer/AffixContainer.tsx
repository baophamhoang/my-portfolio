import {
  ActionIcon,
  Affix,
  Burger,
  Flex,
  getGradient,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cn from "classnames";
import { FaMoon, FaSun } from "react-icons/fa";
import classes from "./AffixContainer.module.scss";

const StyledActionIcon = ActionIcon.withProps({
  variant: "default",
  radius: 90,
  p: 8,
  size: 40,
});

const AffixContainer: React.FC = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const nightGradientStyles = getGradient(
    { deg: 90, from: "blue", to: "violet" },
    theme
  );
  const lightGradientStyles = getGradient(
    { deg: 90, from: "yellow", to: "white" },
    theme
  );

  const toggleColorScheme = (e: any) => {
    e.preventDefault();
    setColorScheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <Affix position={{ top: 20, right: 0 }}>
        <Flex
          className={cn(classes.box, opened && classes.open)}
          align="center"
          justify="space-between"
          sx={{ backgroundColor: theme.colors.cyan[5] }}
        >
          <Flex>
            {opened && (
              <>
                <StyledActionIcon
                  className={classes["nightlight-btn"]}
                  c={theme.white}
                  bg={isDark ? lightGradientStyles : nightGradientStyles}
                  onClick={toggleColorScheme}
                >
                  {isDark ? <FaSun /> : <FaMoon />}
                </StyledActionIcon>
              </>
            )}
          </Flex>
          <Burger
            variant="transparent"
            className={classes.burger}
            opened={opened}
            onClick={toggle}
          />
        </Flex>
      </Affix>
    </>
  );
};

export default AffixContainer;
