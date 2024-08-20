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

import { useKpisDataQuery } from "../services/queries/campus.query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalForm from "../components/ModalForm";
import { MdCreateNewFolder, MdEditDocument, MdDelete } from "react-icons/md";

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

const Kpis = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const handleOpen = (type: string): void => {
    setOpen(true);
    setModalType(type);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const { isLoading, data, error } = useKpisDataQuery();

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
      <ModalForm open={open} handleClose={handleClose} modalType={modalType} />
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
            border: "3px solid #f05324",
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
          <h1>KPIS Page</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "90%" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ backgroundColor: "#f05324 !important" }}>
                    Names
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#f05324 !important" }} align="right">
                    Values
                  </StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: "#f05324 !important" }} align="right">
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((data) => (
                  <StyledTableRow key={data.name}>
                    <StyledTableCell component="th" scope="row">
                      {data.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{data.value}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "80px",
                          float: "right",
                          justifyContent: "space-between",
                          gap: 2,
                        }}
                      >
                        <MdCreateNewFolder
                          style={{ color: "green" }}
                          onClick={() => handleOpen("Create KPI's Form")}
                        />
                        <MdEditDocument
                          style={{ color: "gray" }}
                          onClick={() => handleOpen("Update KPI's Form")}
                        />
                        <MdDelete style={{ color: "red" }} />
                      </Box>
                    </StyledTableCell>
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

export default Kpis;
