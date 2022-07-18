import React, { useEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  children: React.ReactNode;
}

const Shell: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);
  const matches = useMediaQuery("(max-width: 768px)", false);

  useEffect(() => {
    setOpened(false); // Close the navigation panel
  }, [pathname]);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : "#f4f5f7",
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 370, lg: 370 }}
          styles={{
            root: {
              background: dark ? theme.colors.dark[8] : "#fff",
              border: "none",
            },
          }}
        >
          <button onClick={() => toggleColorScheme()}>Tes</button>
        </Navbar>
      }
      header={
        matches ? (
          <Header height={70} p="md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Burger
                className="sm:block"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
              <Text>Application header</Text>
            </div>
          </Header>
        ) : (
          <></>
        )
      }
    >
      {children}
    </AppShell>
  );
};

const AppLayout: React.FC = () => {
  const { pathname } = useLocation();

    return <Shell><Outlet /></Shell>;
};
export default AppLayout;
