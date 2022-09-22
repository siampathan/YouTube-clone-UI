import SideBar from "./sidebar/sidebar";
import RecommendedVideos from "./recommended/recommendedVideos";
import "../App.css";

const MixedFile = () => {
  return (
    <div className="app__page">
      <SideBar />
      <RecommendedVideos />
      {/* RecommendedVideo */}
    </div>
  );
};

export default MixedFile;
