import React from "react";
import "./RecentPostsComponent.css";

export default function RecentPostsComponent() {
  return (
    <div id="recentPostsComponent">
      <div>
        <div id="recentPostsInnerComponent">
          <div>
            <div id="recentPostsInnerComponentTitle">
              <h2>Recent Posts</h2>
            </div>
            <div>
              <div id="recentPostsPictureText">
                <div id="recentPostsInnerComponentPicture">
                  <img></img>
                </div>
                <div id="recentPostsInnerComponentText">
                  <p>Dude almost choked to death by barbell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
