import "./App.css";
import Header from "./components/header/header";
import RecommendedVideos from "./components/recommended/recommendedVideos";
import SideBar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <SideBar />
        <RecommendedVideos />
        {/* RecommendedVideo */}
      </div>
    </div>
  );
}

export default App;
