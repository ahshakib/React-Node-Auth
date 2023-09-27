import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import "../index.css";
export const HomePage = () => {
  return (
    <div>
      <Box>
        <Box sx={{ height: "80px", width: "100%" }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit">Courses</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
      </Box>
    </div>
  );
};
