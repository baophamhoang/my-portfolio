import { SwiperPageProps } from "@components";

export interface SwiperPageInitialProps extends Omit<SwiperPageProps, 'idx' | 'onSwiperPageClick'> {}