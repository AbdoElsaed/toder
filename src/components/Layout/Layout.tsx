import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { MiniDrawer } from "@/components/Drawer";
import { MainBar } from "@/components/AppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1F1F1F",
      paper: "#1F1F1F",
    },
  },
});

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <MiniDrawer>
            <MainBar />
            {children}
          </MiniDrawer>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};
