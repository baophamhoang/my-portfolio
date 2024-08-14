import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header p={10}>
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default Layout;
