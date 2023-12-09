import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import "./LoginAdvertiseButton.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginAdvertiseButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open2, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={(handleClose, handleOpen)}>Log In/Sign Up</MenuItem>
        <MenuItem onClick={handleClose}>Advertise on Reddit</MenuItem>
        <MenuItem onClick={handleClose}>Shop Collectable Avatars</MenuItem>
      </Menu>
      <div>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Log in
            </Typography>
            <h2>
              By continuing, you agree to our User Agreement and acknowledge
              that you understand the Privacy Policy.
            </h2>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
