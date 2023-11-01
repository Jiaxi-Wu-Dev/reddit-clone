import "./CreatePostComponent.css";
import CommunityModal from "../CreateCommunityComponent/CommunityModal";

export default function CreatePostComponent() {
  return (
    <div id="createPostComponent">
      <div id="createPostInnerComponent">
        <div id="createPostComponentBackgroundImg"></div>
        <div id="createPostComponentSubreddit">
          <div id="createPostComponentSnoo"></div>
          <div id="createPostComponentTextSection">
            <span id="createPostComponentText">r/all</span>
          </div>
        </div>
        <div id="subRedditDescriptionTextSection">
          <div id="subRedditDescriptionText">
            <div id="subRedditDescriptionTextLine">
              The most active posts from all of Reddit.
            </div>
            <div id="subRedditDescriptionTextLine">
              Come here to see new posts rising and be a
            </div>
            <div id="subRedditDescriptionTextLine">
              part of the conversation.
            </div>
          </div>
        </div>
        <hr id="lineSeperator" />
        <div id="createPostComponentButtonGroup">
          <div id="createPostComponentButtons">
            <button id="createPostButton">Create Post</button>
          </div>
          <div id="createPostComponentButtons">
            <CommunityModal />
          </div>
        </div>
      </div>
    </div>
  );
}
