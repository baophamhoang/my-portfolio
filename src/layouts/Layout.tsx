import { AffixContainer, PageSliderContainer } from "@containers";
import { AppShell, Center } from "@mantine/core";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppShell header={{ height: 50 }} padding={{ base: 60, md: 10 }}>
        {/* <AppShell.Header p={10}></AppShell.Header> */}
        <AppShell.Main>{children}</AppShell.Main>
        <PageSliderContainer />
        <AffixContainer />
      </AppShell>
    </>
  );
};

export default Layout;
