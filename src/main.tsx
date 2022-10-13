import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider position="bottom-right">
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
);
