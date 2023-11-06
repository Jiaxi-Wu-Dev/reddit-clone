import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RedditIcon from "@mui/icons-material/Reddit";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./resourcesAccordian.css";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "#0b1416",
  color: "white",
};

const blackBackgroundStyle = {
  bgcolor: "#0b1416",
};

function ResourcesAccordian() {
  return (
    <div>
      <Accordion
        sx={blackBackgroundStyle}
        disableGutters="false"
        defaultExpanded="true"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon id="expandMoreIcon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="resourcesText">Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RedditIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="About Reddit" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CampaignOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Advertise" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBookRoundedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BuildOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Careers" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NewspaperOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Press" />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ResourcesAccordian;
