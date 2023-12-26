import React from "react";

import "./App.css";
import SmartLoader from "./components/SmartLoader";
import MenuIconStart from "./components/MenuIconStart";
import IconPanel from "./components/IconPanel";
import LeftMenuToggle from "./components/LeftMenuToggle";
import PalleonBody from "./components/PalleonBody";
import RightToggleMenu from "./components/RightToggleMenu";
import PalleonRightCol from "./components/PalleonRightCol";
import ModelAddNew from "./components/ModelAddNew";
import ModelSaveStart from "./components/ModelSaveStart";
import ModelMediaLib from "./components/ModelMediaLib";
import ModelSvgLib from "./components/ModelSvgLib";
import ModelHistory from "./components/ModelHistory";

function App() {
  return (
    <>
      <SmartLoader />
      <MenuIconStart />
      <IconPanel />
      <LeftMenuToggle />
      <PalleonBody />
      <RightToggleMenu />
      <PalleonRightCol />
      <ModelAddNew />
      <ModelSaveStart />
      <ModelMediaLib />
      <ModelSvgLib />
      <ModelHistory />
    </>
  );
}

export default App;
