import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
