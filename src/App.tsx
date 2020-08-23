import React, { useState } from "react";
import "./App.css";
import {
  Names,
  Questions,
  Cities,
  Pinterest,
  Factions,
  Items,
  Worlds,
} from "./sections";
import { AppBar, Tabs, Tab } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const handleChange = (event: any, newValue: number) => {
    setActiveTabIndex(newValue);
  };
  console.log(activeTabIndex);
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={activeTabIndex}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Items" {...a11yProps(1)} />
          <Tab label="Worlds" {...a11yProps(2)} />
          <Tab label="Factions" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTabIndex} index={0}>
        <h1>Qs</h1>
        <Questions />
      </TabPanel>
      <TabPanel value={activeTabIndex} index={1}>
        <h1>Items</h1>
        <Items />
      </TabPanel>
      <TabPanel value={activeTabIndex} index={2}>
        <h1>Worlds</h1>
        <Worlds />
      </TabPanel>
      <TabPanel value={activeTabIndex} index={3}>
        <h1>Factions</h1>
        <Factions />
      </TabPanel>
      {/* <h1>Qs</h1>
      <Questions />
      <h1>Factions</h1>
      <Factions />
      <h1>Worlds</h1>
      <Worlds />
      {/* <h1>Cities</h1>
      <Cities /> */}
      {/* <h1>Items</h1>
      <Items />
      <h1>Cities</h1>
      <h1>Names</h1>
      <Names />
      <h1>Pinterest</h1>
      <Pinterest /> 
      */}
    </div>
  );
}

export default App;
