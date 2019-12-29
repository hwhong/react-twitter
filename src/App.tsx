import React from "react";
import "./App.css";
import { SideBar } from "./components/sidebar/sidebar";
import { ContentSection } from "./components/content/contentsection";
import { RightBar } from "./components/rightbar/rightbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="wrapper">
        <ContentSection />
        <RightBar />
      </div>
    </div>
  );
};

export default App;
