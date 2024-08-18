export interface SwiperPageProps {
  idx: number;
  front?: React.ReactElement;
  back?: React.ReactElement;
  isFrontCover?: boolean;
  isBackCover?: boolean;
  onSwiperPageClick: (e: React.MouseEvent<HTMLElement>, idx: number) => void;
}
