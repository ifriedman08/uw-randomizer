import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import { generateArchetype, generateDNDChar } from "./utils";

interface IProps {}

const Characters: FC<IProps> = () => {
  const [generatedUWArchetype, setGeneratedUWArchetype] = useState<string>(
    generateArchetype()
  );
  const [generatedDNDArchetype, setGeneratedDNDArchetype] = useState<string>(
    generateDNDChar()
  );
  return (
    <section>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGeneratedUWArchetype(generateArchetype())}
      >
        Generate UW Archetype
      </Button>
      <h3>{generatedUWArchetype}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGeneratedDNDArchetype(generateDNDChar())}
      >
        Generate D&D Archetype
      </Button>
      <h3>{generatedDNDArchetype}</h3>
    </section>
  );
};

export default Characters;
