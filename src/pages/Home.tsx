import Grid from "@mui/material/Grid";
import { Box, Container, IconButton, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";

type Props = object;

interface LinkData {
  name: string;
  icon: "DescriptionIcon" | "BarChartIcon" | "TrendingUpIcon" | "SecurityIcon";
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (_props: Props) => {
  const iconMap: Record<string, JSX.Element> = {
    DescriptionIcon: <DescriptionIcon />,
    BarChartIcon: <BarChartIcon />,
    TrendingUpIcon: <TrendingUpIcon />,
    SecurityIcon: <SecurityIcon />,
  };

  const apiData: LinkData[] = [
    { name: "Details", icon: "DescriptionIcon", link: "/details" },
    { name: "Measures", icon: "BarChartIcon", link: "/measures" },
    { name: "KPIS", icon: "TrendingUpIcon", link: "/kpis" },
    { name: "Control", icon: "SecurityIcon", link: "/control" },
  ];
  return (
    <div>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#fff",
          p: { xs: 2, md: 6 },
          mb: "20px",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              border: "3px solid black",
              height: "80vh",
              borderRadius: "10px",
              padding: "40px",
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
              }}
            >
              <Box
                component="img"
                src="/images/plane.gif"
                alt="Brand Logo"
                sx={{
                  width: "90%",
                  height: "60%",
                  display: "flex",
                  my: "12%",
                  mr: "40px",
                  mx: { xs: "auto" },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{}}>
                <Box
                  component="img"
                  src="/images/mapbox_logo.png"
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
                    fontSize: "32px",
                    px: "auto",
                    justifyContent: "center",
                  }}
                >
                  Campus
                </Typography>

                <Box>
                  {apiData.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      mb={2}
                      sx={{
                        fontSize: "60px",
                        marginTop: "30px",
                        cursor: "pointer",
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "26px",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {iconMap[item.icon]}
                      </IconButton>
                      <Typography
                        sx={{ fontSize: "26px", fontWeight: "bold", ml: "10px" }}
                        variant="body1"
                      >
                        {item.name}
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
