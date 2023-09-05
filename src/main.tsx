import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { CssBaseline } from "@mui/material";

// Create your MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7d0b", // primary color
    },
    secondary: {
      main: "#fffcb3", // secondary color
    },
    background: {
      default: "#fff0f0", // background color
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif", // primary font
  },
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
