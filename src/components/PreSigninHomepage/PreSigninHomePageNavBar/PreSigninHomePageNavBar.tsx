import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import LoginAdvertiseButton from "../PreSigninHomePageNavBar/LoginAdvertiseButton/LoginAdvertiseButton.jsx";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RedditIcon from "@mui/icons-material/Reddit";
import "../../PreSigninHomepage/PreSigninHomePageNavBar/PreSigninHomePageNavBar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchNavAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1a1a1b", height: "60px" }}
      >
        <Toolbar id="preSigninNavBar">
          <div id="preSigninLogoText">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <RedditIcon id="redditIcon" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              readdit
            </Typography>
          </div>

          <div id="preSigninHomePageSearchBarContainer">
            <Search id="preSigninHomePageSearchBar">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Reddit"
                inputProps={{ "aria-label": "search" }}
                id="searchInput"
              />
            </Search>
          </div>
          <div id="preSigninGetAppLoginButtonGroup">
            <Button id="roundedShare" variant="outlined">
              <QrCodeScannerIcon sx={{ fontSize: 20 }} />
              <div>
                <Typography id="getAppLoginButtons" textTransform="none">
                  Get app
                </Typography>
              </div>
            </Button>
            <Button id="orangeRoundedShare" variant="outlined">
              <div>
                <Typography id="getAppLoginButtons" textTransform="none">
                  Log In
                </Typography>
              </div>
            </Button>

            <LoginAdvertiseButton sx={{ fontSize: 20 }} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
