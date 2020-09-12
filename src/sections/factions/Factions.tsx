import React, { FC, useState } from "react";
import { generateFactionTraits, generateHomebrewFaction } from "./utils";
import { Button } from "@material-ui/core";

const Factions: FC = () => {
  const [generatedFaction, setGeneratedFaction] = useState<
    (string | undefined)[]
  >();
  const generateNewFaction = () => {
    setGeneratedFaction(generateFactionTraits());
  };
  const [generatedHomebrewFaction, setHomebrewGeneratedFaction] = useState<
    string | undefined
  >();
  const generateNewHomebrewFaction = () => {
    setHomebrewGeneratedFaction(generateHomebrewFaction());
  };
  return (
    <section>
      {generatedFaction && (
        <h3>
          {generatedFaction[0]} - {generatedFaction[1]} - {generatedFaction[2]}
        </h3>
      )}
      <Button variant="contained" color="primary" onClick={generateNewFaction}>
        Generate Faction
      </Button>
      <h3>{generatedHomebrewFaction}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={generateNewHomebrewFaction}
      >
        Generate Homebrew Faction
      </Button>
    </section>
  );
};

export default Factions;
