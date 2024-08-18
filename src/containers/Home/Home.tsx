import { SwiperBook } from "@components";
import {
  Container
} from "@mantine/core";
import { bookPages } from "./helpers";

const Home: React.FC = () => {
  return (
    <>
      <Container size="md">
        {/* <Swiper /> - Hide */}
        <SwiperBook pages={bookPages}></SwiperBook>
      </Container>
    </>
  );
};

export default Home;
