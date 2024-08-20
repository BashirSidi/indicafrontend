import { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Modal,
  Box,
} from "@mui/material";
import CloseIcon from "../assets/close.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "340px", md: "640px" },
  height: { xs: "47%", sm: "", md: "424px" },
  "@media(max-width: 300px)": {
    height: "50%",
  },
  "@media(min-width: 380px)": {
    height: "38%",
  },
  "@media(min-width: 412px)": {
    height: "35%",
  },
  "@media(min-width: 600px)": {
    height: "424px",
  },
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "16px",
};

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
  modalType: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, handleClose, modalType }) => {
  const [noteType, setNoteType] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);

  const handleNoteTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNoteType(event.target.value as string);
  };

  const handleClientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(event.target.value);
  };

  // const handleUpload = () => {
  //   if (clientName !== "" && noteType !== "") {
  //     dispatch(
  //       uploadClient({
  //         id: new Date().getTime().toString(),
  //         client: clientName,
  //         type: noteType,
  //         progress: 1,
  //       }),
  //     );
  //     setClientName("");
  //     setNoteType("");
  //     handleClose();
  //   }
  // };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container maxWidth="sm">
            <Box
              component="img"
              sx={{
                position: "absolute",
                right: "32px",
                top: "24px",
                cursor: "pointer",
              }}
              onClick={handleClose}
              alt="Close icon"
              src={CloseIcon}
            />
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: { xs: "16px", md: "24px" },
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "50px",
                }}
              >
                {modalType}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "12px", md: "16px" },
                  lineHeight: { xs: "14px", md: "24px" },
                  textAlign: "center",
                  color: "#666666",
                  marginTop: "6px",
                }}
              >
                Fill in all informations
              </Typography>

              <Box>
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    sx={{
                      mt: { xs: "12px", md: "60px" },
                      marginTop: { xs: "30px", md: "70px" },
                      backgroundColor: "#F2F2F2",
                      height: { xs: "15px", md: "30px" },
                      padding: { xs: "0px 10px 22px 10px", md: "6px 24px 16px 24px" },
                      borderRadius: "8px",
                      textAlign: "center",
                      "& fieldset": { border: "none" },
                      input: {
                        fontWeight: 400,
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        lineHeight: "24px",
                      },
                      label: { color: "blue" },
                    }}
                    autoComplete="off"
                    value={clientName}
                    onChange={handleClientNameChange}
                    placeholder="Enter name"
                  />
                </FormControl>
                <Button
                  disableRipple
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 16px",
                    gap: "8px",
                    height: { xs: "32px", md: "40px" },
                    ml: "auto",
                    mr: "auto",
                    width: { xs: "150px", md: "180px" },
                    borderRadius: "8px",
                    marginTop: { xs: "44px", md: "75px" },
                    background: "#f05324",
                  }}
                  // onClick={handleUpload}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                      fontStyle: "normal",
                      fontWeight: { xs: 700, md: 700 },
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "24px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                    }}
                  >
                    Submit
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
