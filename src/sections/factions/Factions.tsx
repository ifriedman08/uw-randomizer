import React, { FC, useState } from "react";
import { generateFactionTraits } from "./utils";
import { Button } from "@material-ui/core";

const Factions: FC = () => {
  const [generatedFaction, setGeneratedFaction] = useState<
    (string | undefined)[]
  >(generateFactionTraits());
  const generateNewFaction = () => {
    setGeneratedFaction(generateFactionTraits());
  };
  return (
    <section>
      <h3>
        {generatedFaction[0]} - {generatedFaction[1]} - {generatedFaction[2]}
      </h3>
      <Button variant="contained" color="primary" onClick={generateNewFaction}>
        Generate Faction
      </Button>
    </section>
  );
};

export default Factions;
