import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import { generateMod, Mod } from "./utils";
import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 400px;
`;

const Mods: FC = () => {
  const [generatedMod, setGeneratedMod] = useState<Mod>(generateMod());
  const generateNewMod = () => {
    setGeneratedMod(generateMod());
  };
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={generateNewMod}>
        Generate Mod
      </Button>
      {generatedMod.class && (
        <h3>
          {generatedMod.class.class} ({generatedMod.type})
        </h3>
      )}
      <h4>{generatedMod.class?.description}</h4>
      {generatedMod.class?.extra && (
        <p>{generatedMod.class.extra.tags.map((t) => t.name).join(", ")}</p>
      )}
      {generatedMod.class?.locomotion && (
        <p>{generatedMod.class?.locomotion}</p>
      )}
    </Container>
  );
};

export default Mods;
