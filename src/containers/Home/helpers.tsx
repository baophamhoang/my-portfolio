import { SwiperPageInitialProps } from "@components";
import { Anchor, Box, Code, Divider, Image, Text, Title } from "@mantine/core";

export const bookPages: SwiperPageInitialProps[] = [
  {
    front: (
      <Box>
        <Title order={1}>FlipBook</Title>
        <Box>
          <Text>2024.Second edition</Text>
        </Box>
      </Box>
    ),
    back: (
      <Box>
        <Title order={2}>Responsive</Title>
        <Box>
          <Text>
            Fully responsive CSS flip book, thanks to the <Code>cqmin</Code>{" "}
            unit.
          </Text>
        </Box>
      </Box>
    ),
    isFrontCover: true,
  },
  {
    front: (
      <Box>
        <Text>
          Even more, the book height is dicated by the amount of content in the
          tallest page. The only thing you need to take care of is how much text
          you put into a page.
        </Text>
      </Box>
    ),
    back: (
      <Box>
        <Image src="https://picsum.photos/id/24/600/600" alt="Img 1" />
      </Box>
    ),
  },
  {
    front: (
      <Box>
        <Title order={2}>JS at its minimum</Title>
        <Text>
          The opened (<i>viewing</i>) pages of the flip book are always kept at
          the same elevation. This is necessary if your book has no inclination
          (is top-down-view). Have you noticed that you can also click on the
          pages edge? CSS will nicely animate the group of pages to skip with a
          staggered animation.
        </Text>
      </Box>
    ),
    back: (
      <Box>
        <Text>
          Additionally JavaScript allows you to click on an anchor link in your
          text — without turning the page. You can also have multiple
          independent flip books in a single document. You're all covered.
        </Text>
      </Box>
    ),
  },
  {
    front: (
      <Box>
        <Title order={2}>Crafting CSS magic</Title>
        <Text>
          Even more, the book height is dicated by the amount of content in the
          tallest page. The only thing you need to take care of is how much text
          you put into a page.
        </Text>
      </Box>
    ),
    back: (
      <Box>
        <Text>
          Like in this demo, you can change the perspective of the parent
          container and change the X axis rotation of the book for extra effect.
        </Text>
      </Box>
    ),
  },
  {
    front: (
      <Box>
        <Image src="https://picsum.photos/id/1073/600/600" alt="Img 2" />
      </Box>
    ),
    back: (
      <Box>
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
    ),
    isBackCover: true,
  },
];
