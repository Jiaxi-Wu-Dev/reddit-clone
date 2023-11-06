import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

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

function TopicsAccordian() {
  return (
    <div>
      <Accordion
        disableGutters="false"
        defaultExpanded="true"
        sx={blackBackgroundWhiteTetxtStyle}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={blackBackgroundWhiteTetxtStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Topics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VideogameAssetOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsBaseballOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Sports" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShowChartOutlinedIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Business" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CurrencyBitcoinIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Crypto" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LiveTvIcon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Television" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarPurple500Icon className="navigationButtonIcons" />
                </ListItemIcon>
                <ListItemText primary="Celebrity" />
              </ListItemButton>
            </ListItem>
          </List>
          {/*  <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <div>
               
                <div className="sideBarNavigationButtons">
                  <SportsBaseballOutlinedIcon className="navigationButtonIcons" />{" "}
                  <ListItemText primary="Sports" />
                </div>
                <div className="sideBarNavigationButtons">
                  <ShowChartOutlinedIcon className="navigationButtonIcons" />{" "}
                  <ListItemText primary="Business" />
                </div>
                <div className="sideBarNavigationButtons">
                  <CurrencyBitcoinIcon className="navigationButtonIcons" />{" "}
                  <ListItemText primary="Crypto" />
                </div>
                <div className="sideBarNavigationButtons">
                  <LiveTvIcon className="navigationButtonIcons" />{" "}
                  <ListItemText primary="Television" />
                </div>
                <div className="sideBarNavigationButtons">
                  <StarPurple500Icon className="navigationButtonIcons" />{" "}
                  <ListItemText primary="Celebrity" />
                </div>
              </div>
            </ListItem>
          </List> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TopicsAccordian;
