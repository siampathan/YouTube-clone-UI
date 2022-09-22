import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import MixedFile from "./components/mixedFile";
import MixingFile from "./mixingFiled";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MixedFile />} />
        <Route path="/search/:searchID" element={<MixingFile />} />
      </Routes>
    </div>
  );
}

export default App;
