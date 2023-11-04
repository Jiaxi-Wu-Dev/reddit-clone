import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
import "./Homepage.css";
import SearchNavAppBar from "../Appbar/SearchNavAppBar/SearchNavAppBar";

export default function Homepage() {
  return (
    <div id="homepageContainer">
      <SearchNavAppBar />
      <div id="homepage">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}
