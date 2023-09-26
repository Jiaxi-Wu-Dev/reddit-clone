import "./PremiumComponent.css";
import Badge from "@mui/material/Badge";
import SecurityIcon from "@mui/icons-material/Security";

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
