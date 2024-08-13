import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={{padding: '10vh 10px 0'}}>{children}</div>;
};

export default Layout;
