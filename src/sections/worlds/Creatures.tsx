import React, { FC, useState } from "react";
import FaunaView from "./Fauna";
import { generateFaunaType, FaunaType } from "./utils/sf-fauna";
import { Button } from "@material-ui/core";

const Creatures: FC = () => {
  const [generatedCreature, setGeneratedCreature] = useState<FaunaType>(
    generateFaunaType(false, true)
  );

  const generateNewCreature = () => {
    setGeneratedCreature(generateFaunaType(false, true));
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={generateNewCreature}
      >
        Generate Creature
      </Button>
      <FaunaView fauna={generatedCreature} />
    </>
  );
};

export default Creatures;
