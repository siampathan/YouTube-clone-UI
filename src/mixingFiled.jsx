import SideBar from "./components/sidebar/sidebar";
import SearchPage from "./components/searchPage/searchPage";

const MixingFile = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#fafafa" }}>
      <SideBar />
      <SearchPage />
    </div>
  );
};

export default MixingFile;
