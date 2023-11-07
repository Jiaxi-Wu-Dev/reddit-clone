import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PopularCommunitySubReddit from "../AccordianComponents/PopularCommunity/PopularCommunitySubReddit";
import "./popularCommunities.css";

import { subRedditData } from "./subRedditData";

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
            <ExpandMoreIcon id="seeMore" sx={blackBackgroundWhiteTetxtStyle} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={blackBackgroundWhiteTetxtStyle}
        >
          <Typography>Popular Communities</Typography>
        </AccordionSummary>
        <AccordionDetails sx={blackBackgroundWhiteTetxtStyle}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            {subRedditData.map((e) => (
              <ListItem sx={blackBackgroundWhiteTetxtStyle}>
                <div className="sideBarNavigationButtons">
                  <PopularCommunitySubReddit
                    key={e.key}
                    className="navigationButtonIcons"
                    subRedditName={e.subRedditName}
                    members={e.members}
                    src={e.src}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordian;
