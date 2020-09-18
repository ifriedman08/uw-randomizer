import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useHistory } from "react-router-dom";

import "./App.css";

import {
  Names,
  Questions,
  // Cities,
  // Pinterest,
  Factions,
  Items,
  Worlds,
  Markets,
  Events,
} from "./sections";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Creatures from "./sections/worlds/Creatures";
import Settlements from "./sections/settlement/Settlements";
import Quests from "./sections/quests/Quests";
import { startCase } from "lodash";
import Characters from "./sections/characters/Characters";
import Mods from "./sections/mods/Mods";
import Vessels from "./sections/vessels/Vessels";

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

const TABS = [
  { key: "questions", component: <Questions /> },
  { key: "items", component: <Items /> },
  { key: "mods", component: <Mods /> },
  { key: "worlds", component: <Worlds /> },
  { key: "factions", component: <Factions /> },
  { key: "characters", component: <Characters /> },
  { key: "markets", component: <Markets /> },
  { key: "creatures", component: <Creatures /> },
  { key: "names", component: <Names /> },
  { key: "settlements", component: <Settlements /> },
  { key: "vessels", component: <Vessels /> },
  { key: "events", component: <Events /> },
  { key: "quests", component: <Quests /> },
];
function App() {
  const history = useHistory();
  let defaultTabIndex = TABS.findIndex(
    (t) => history.location.pathname === `/${t.key}`
  );
  if (defaultTabIndex < 0) {
    defaultTabIndex = 0;
  }
  const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultTabIndex);
  const handleChange = (event: any, newValue: number) => {
    history.push(`/${TABS[newValue].key}`);
    setActiveTabIndex(newValue);
  };
  const handleChangeIndex = (index: number) => {
    history.push(`/${TABS[index].key}`);
    setActiveTabIndex(index);
  };
  console.log(history);
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={activeTabIndex}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="simple tabs example"
        >
          {TABS.map((t, idx) => (
            <Tab label={startCase(t.key)} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={"x"}
        index={activeTabIndex}
        onChangeIndex={handleChangeIndex}
      >
        {TABS.map((t, idx) => (
          <TabPanel value={activeTabIndex} index={idx}>
            <h1>{startCase(t.key)}</h1>
            {t.component}
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
}

export default App;
