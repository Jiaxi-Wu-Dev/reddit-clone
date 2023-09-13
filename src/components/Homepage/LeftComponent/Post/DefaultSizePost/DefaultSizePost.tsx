import * as React from "react";
import Box from "@mui/material/Box";
import "./DefaultSizePost.css";
import SailingIcon from "@mui/icons-material/Sailing";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 640,
        height: 665,
        marginTop: "20px",
        backgroundColor: "grey",
        "&:hover": {
          backgroundColor: "grey",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box
        sx={{
          width: 640,
          height: 620,
          marginTop: "20px",
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "red",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        id="mainComponent"
      >
        <div id="DefaultSizePostTopBar">
          <div id="sailingIcon">
            {" "}
            <SailingIcon fontSize="small" />
          </div>
          <div id="DefaultSizePostTopBarDetails">
            <div className="TopBarDetails">r/Aquariums</div>
            <div className="TopBarDetails">
              <span>Posted by</span>
            </div>
            <div className="TopBarDetails">
              <div>
                <a>u/Goofyboi</a>
              </div>
            </div>
            <span className="TopBarDetails">3 hours ago </span>
          </div>
        </div>
        <div id="DefaultSizePostTitle">
          <div>
            <a>
              <div>
                <h3 id="title">Help with growing greener aquarium plants!</h3>
              </div>
            </a>
          </div>
          <div id="tag">
            <div>
              <a>
                <div>
                  <span>Help/Advice</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="contentBox">
          <div>
            <div>
              <div>
                <a>
                  <div>
                    <div id="pictureBox">
                      <img
                        id="picture"
                        alt="Post Picture"
                        src="https://preview.redd.it/fkj5mv8uwonb1.jpg?width=640&crop=smart&auto=webp&s=97a166585e4fab6f4d47495c6d8051447450db4b"
                      ></img>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
