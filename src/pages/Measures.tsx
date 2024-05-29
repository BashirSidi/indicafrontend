import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import { useMeasuresDataQuery } from "../services/queries/campus.query";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Measures = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useMeasuresDataQuery();

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
          <h1>Measures Page</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "90%" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Names</StyledTableCell>
                  <StyledTableCell align="right">Values</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((data) => (
                  <StyledTableRow key={data.name}>
                    <StyledTableCell component="th" scope="row">
                      {data.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{data.value}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Measures;
