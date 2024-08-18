import { App } from "@containers";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" >
      <App />
    </MantineProvider>
  </StrictMode>
);
