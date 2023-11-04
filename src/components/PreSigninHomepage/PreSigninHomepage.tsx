import SearchNavAppBar from "../Appbar/SearchNavAppBar/SearchNavAppBar";
import LeftComponent from "../PreSigninHomepage/LeftComponent/LeftComponent";
import RightComponent from "../PreSigninHomepage/RightComponent/RightComponent";
import "./preSigninHomepage.css";

function PreSigninHomepage() {
  return (
    <div id="preSigninHomepageContainer">
      <SearchNavAppBar />
      <div id="preSigninHomepage">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default PreSigninHomepage;
