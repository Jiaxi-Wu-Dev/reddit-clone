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
  bgcolor: "#0b1416",
  color: "white",
};

const blackBackgroundWhiteTetxtStyle = {
  bgcolor: "#0b1416",
  color: "white",
};

function Accordian() {
  return (
    <div>
      <Accordion disableGutters="false" sx={blackBackgroundWhiteTetxtStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={blackBackgroundWhiteTetxtStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={blackBackgroundWhiteTetxtStyle}
        >
          <Typography>Recent</Typography>
        </AccordionSummary>
        <AccordionDetails sx={blackBackgroundWhiteTetxtStyle}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button sx={blackBackgroundWhiteTetxtStyle}>
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
