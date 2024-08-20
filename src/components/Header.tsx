import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useHomeDataQuery } from "../services/queries/campus.query";

type Props = {};

const Header = (props: Props) => {
  const { data } = useHomeDataQuery();

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "#FFFFFF",
          borderBottom: "2px solid #f05324",
          height: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100px",
                height: "32px",
                marginTop: "12px",
              }}
              alt="kangacook Logo"
              src={data?.logo}
            />

            <Box
              component="img"
              sx={{
                display: { xs: "flex", md: "none" },
                margin: "auto",
                width: "42px",
                height: "24px",
                marginTop: "26px",
              }}
              alt="kangacook Logo"
              src={data?.logo}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
