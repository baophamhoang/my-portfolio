import { SwiperPageInitialProps } from "@components";
import {
  PageOneBack,
  PageOneFront,
  PageThreeBack,
  PageThreeFront,
  PageTwoBack,
  PageTwoFront,
} from "./pages";

export const bookPages: SwiperPageInitialProps[] = [
  {
    front: PageOneFront,
    back: PageOneBack,
    isFrontCover: true,
  },
  {
    front: PageTwoFront,
    back: PageTwoBack,
  },
  {
    front: PageThreeFront,
    back: PageThreeBack,
    isBackCover: true,
  },
];
