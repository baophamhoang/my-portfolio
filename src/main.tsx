import { theme } from "@configs";
import { App } from "@containers";
import LoadingContainer from "@containers/StartupContainer/LoadingContainer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      stylesTransform={emotionTransform}
      defaultColorScheme="auto"
    >
      <MantineEmotionProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingContainer />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  </StrictMode>
);
