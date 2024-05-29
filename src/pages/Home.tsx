import Grid from "@mui/material/Grid";
import { Box, Container, IconButton, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
import { useHomeDataQuery } from "../services/queries/campus.query";
import { useEffect } from "react";

type Props = object;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (_props: Props) => {
  const navigate = useNavigate();

  const { isLoading, data, error } = useHomeDataQuery();

  useEffect(() => {}, []);

  if (error) {
    return <h1>Something went wrong: server error...</h1>;
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="flex-start" height="100vh">
        <h1>Loading...</h1>
      </Box>
    );
  }

  const iconMap: Record<string, JSX.Element> = {
    DescriptionIcon: <DescriptionIcon />,
    BarChartIcon: <BarChartIcon />,
    TrendingUpIcon: <TrendingUpIcon />,
    SecurityIcon: <SecurityIcon />,
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: { xs: 0, md: 6 },
          my: { xs: "1.5rem" },
          mb: "20px",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              border: "3px solid black",
              borderRadius: "10px",
              padding: { xs: "16px", md: "40px" },
              overflow: "hidden",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1%",
              }}
            >
              <Box
                component="img"
                src={data?.plane}
                alt="Brand Logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  objectFit: "contain",
                  mr: "40px",
                  mx: { xs: "auto" },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 1, md: 2 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{}}>
                <Box
                  component="img"
                  src={data?.logo}
                  alt="Brand Logo"
                  sx={{
                    width: "90%",
                    display: "flex",
                    mx: { xs: "auto", md: "0" },
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Typography
                  sx={{
                    display: "flex",
                    fontWeight: 400,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    px: "auto",
                    justifyContent: "center",
                  }}
                >
                  {data?.company_name}
                </Typography>

                <Box>
                  {data?.data?.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      sx={{
                        fontSize: "60px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`${item?.url}`)}
                    >
                      <IconButton
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: { xs: "1.5rem", md: "2.5rem" },
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {iconMap[item.icon]}
                      </IconButton>
                      <Typography
                        sx={{
                          fontSize: { xs: "23px", md: "30px" },
                          fontWeight: "bold",
                          ml: "10px",
                          color: "#1a2c25",
                        }}
                        variant="body1"
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
