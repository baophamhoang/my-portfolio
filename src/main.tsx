import { theme } from "@configs";
import { App } from "@containers";
import LoadingContainer from "@containers/StartupContainer/LoadingContainer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <BrowserRouter>
        <Suspense fallback={<LoadingContainer />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
