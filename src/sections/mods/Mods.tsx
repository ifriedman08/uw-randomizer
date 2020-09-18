import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import { generateMod, Mod } from "./utils";

interface IProps {}

const Mods: FC<IProps> = () => {
  const [generatedMod, setGeneratedMod] = useState<Mod>(generateMod());
  const generateNewMod = () => {
    setGeneratedMod(generateMod());
  };
  return (
    <section>
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
    </section>
  );
};

export default Mods;
