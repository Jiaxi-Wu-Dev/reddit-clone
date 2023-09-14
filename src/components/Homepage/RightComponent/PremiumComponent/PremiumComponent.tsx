import * as React from "react";
import "./PremiumComponent.css";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import Button from "@mui/material/Button";

export default function PremiumComponent() {
  return (
    <div id="premiumComponent">
      <div id="premiumComponentInnerSection">
        <div id="innerSectionTextPart">
          <div id="innerSectionIcon">
            <Badge color="error">
              <SecurityIcon />
            </Badge>
          </div>
          <div id="innerSectionText">
            <div id="innerSectionTopText">Reddit Premium</div>
            <div id="innerSectionBottomText">The Best Reddit Experience</div>
          </div>
        </div>
        <div id="premiumComponentButtonSection">
          <button id="premiumComponentButton">Try Now</button>
        </div>
      </div>
    </div>
  );
}
