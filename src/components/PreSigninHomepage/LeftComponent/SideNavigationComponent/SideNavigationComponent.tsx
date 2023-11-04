import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function SideNavigationComponent() {
  return (
    <div>
      <div>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <div className="sideBarNavigationButtons">
              <HomeOutlinedIcon className="navigationButtonIcons" />{" "}
              <ListItemText primary="Inbox" />
            </div>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <div className="sideBarNavigationButtons">
              <ArrowOutwardOutlinedIcon className="navigationButtonIcons" />{" "}
              <ListItemText primary="Inbox" />
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default SideNavigationComponent;
