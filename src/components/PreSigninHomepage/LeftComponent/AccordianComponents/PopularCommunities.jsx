import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PopularCommunitySubReddit from "../AccordianComponents/PopularCommunity/PopularCommunitySubReddit";
import "./popularCommunities.css";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "#04090a",
  color: "white",
};

const blackBackgroundWhiteTetxtStyle = {
  bgcolor: "#04090a",
  color: "white",
  transform: "none",
};

function Accordian() {
  return (
    <div id="">
      <Accordion
        disableGutters="false"
        sx={blackBackgroundWhiteTetxtStyle}
        defaultExpanded="true"
        id="accordianPopular"
      >
        <AccordionSummary
          expandIcon={
            <Typography id="seeMore" sx={blackBackgroundWhiteTetxtStyle}>
              See More
            </Typography>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={blackBackgroundWhiteTetxtStyle}
        >
          <Typography>Popular Communities</Typography>
        </AccordionSummary>
        <AccordionDetails sx={blackBackgroundWhiteTetxtStyle}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem sx={blackBackgroundWhiteTetxtStyle}>
              <div className="sideBarNavigationButtons">
                <PopularCommunitySubReddit className="navigationButtonIcons" />{" "}
              </div>
            </ListItem>
            <ListItem sx={blackBackgroundWhiteTetxtStyle}>
              <div className="sideBarNavigationButtons">
                <PopularCommunitySubReddit className="navigationButtonIcons" />{" "}
              </div>
            </ListItem>
            <ListItem sx={blackBackgroundWhiteTetxtStyle}>
              <div className="sideBarNavigationButtons">
                <PopularCommunitySubReddit className="navigationButtonIcons" />{" "}
              </div>
            </ListItem>
            <ListItem sx={blackBackgroundWhiteTetxtStyle}>
              <div className="sideBarNavigationButtons">
                <PopularCommunitySubReddit className="navigationButtonIcons" />{" "}
              </div>
            </ListItem>
            <ListItem sx={blackBackgroundWhiteTetxtStyle}>
              <div className="sideBarNavigationButtons">
                <PopularCommunitySubReddit className="navigationButtonIcons" />{" "}
              </div>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordian;
