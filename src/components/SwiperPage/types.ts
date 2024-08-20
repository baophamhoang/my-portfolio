export interface SwiperPageProps {
  idx: number;
  front?: React.FunctionComponent| React.ReactElement;
  back?: React.FunctionComponent| React.ReactElement;
  isFrontCover?: boolean;
  isBackCover?: boolean;
  isActive?: boolean;
  onSwiperPageClick: (e: React.MouseEvent<HTMLElement>, idx: number) => void;
}
