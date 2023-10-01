import * as React from "react";
import Box from "@mui/material/Box";
import "./form.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:200,
  bgcolor: "#152F2E",
  boxShadow: 24,
  p: 4,
  color : "#fff",
  textAlign:"center",
  borderTop:"3px solid aqua"
  
};

export default function ModalPopup({ open, handleClose }) {
  return (
    <div>
      <button type="submit">SCHEDULE NOW</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h1">
            Thank You!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We'll reach out to confirm your<br/> appointment shortly.{" "}
          </Typography>
          <div onClick={handleClose} style={{position:"absolute",right:0,top:0}}>
            <CancelRoundedIcon />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
