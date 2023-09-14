import React from "react";
import "./RightComponent.css";
import PremiumComponent from "./PremiumComponent/PremiumComponent";
import CreatePostComponent from "./CreatePostComponent/CreatePostComponent";
import RecentPostsComponent from "./RecentPostsComponent/RecentPostsComponent";

export default function RightComponent() {
  return (
    <div id="rightComponent">
      <PremiumComponent />
      <CreatePostComponent />
      <RecentPostsComponent />
    </div>
  );
}
