import { App } from "@containers";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import LoadingContainer from "@containers/StartupContainer/LoadingContainer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <BrowserRouter>
        <Suspense fallback={<LoadingContainer />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
