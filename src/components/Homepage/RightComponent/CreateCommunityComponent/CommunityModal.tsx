import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./CommunityModal.css";
import RadioGroup from "./RadioGroup/RadioGroup";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute" as `absolute`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CommunityModal() {
  const [open, setOpen] = React.useState(false);
  const [subReddit, setSubReddit] = React.useState("");
  const [num, setNum] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const characterLimit = (number: number) => {
    return 21 - number;
  };

  const createSubReddit = () => {
    console.log("buttonsWorking");
  };

  return (
    <div>
      <button id="createCommunityButton" onClick={handleOpen}>
        Create Community
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a community
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            <div>
              <p id="communityName">Name</p>
              <p id="communityText">
                Community names including capitalization cannot be changed.
              </p>
            </div>
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="/r"
              variant="outlined"
              type="text"
              value={subReddit}
              onChange={(e) => {
                setSubReddit(e.target.value),
                  console.log(e.target.value),
                  setNum(e.target.value.length);
              }}
            />
            <p>{num}/21 characters remaining</p>
          </Box>

          <RadioGroup />
          <Typography>Adult Content</Typography>
          <div id="nsfwCheck">
            <Checkbox {...label} />
            <p className="nsfwText">NSFW</p>
            <p className="nsfwText">18+ year Old Community</p>
          </div>
          <div id="cancelCreateCommunityButtonsContainer">
            <div id="cancelCreateCommunityButtons">
              <Button
                id="greyCancelButton"
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                id="whiteCreateButton"
                variant="contained"
                onClick={createSubReddit}
              >
                Create Community
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
