import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen position="right" buttonPosition="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
