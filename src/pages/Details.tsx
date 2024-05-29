import { Box, Button } from "@mui/material";
import { useDetailsDataQuery } from "../services/queries/campus.query";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useDetailsDataQuery();

  if (error) {
    return <h1>Something went wrong: server error...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("details", typeof data);
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#fff",
          px: { xs: 0, md: 5 },
          my: { xs: "1.5rem" },
          mb: "20px",
        }}
      >
        <Box
          sx={{
            border: "3px solid black",
            borderRadius: "10px",
            padding: { xs: "0.5rem", md: "1rem" },
            overflow: "hidden",
          }}
        >
          <Button
            sx={{ color: "black", borderColor: "black" }}
            variant="outlined"
            size="small"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <h1>Details Page</h1>
          {data?.map((data) => (
            <p key={data.id}>{data.description}</p>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Details;
