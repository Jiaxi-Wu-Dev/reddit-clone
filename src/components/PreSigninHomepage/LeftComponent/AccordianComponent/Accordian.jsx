import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function Accordian() {
  return (
    <div>
      <Accordion disableGutters="false">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <div className="sideBarNavigationButtons">
                <HomeOutlinedIcon className="navigationButtonIcons" />{" "}
                <ListItemText primary="Inbox" />
              </div>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordian;
