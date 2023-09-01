import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Typography gutterBottom variant="h5" component="div">
          {isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
