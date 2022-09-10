import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider position="top-right">
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);
