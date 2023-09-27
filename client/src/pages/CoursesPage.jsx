import { Box } from "@mui/material";
import Card from "../components/Card";
export const CoursesPage = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </div>
  );
};
