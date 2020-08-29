import React, { FC, useState } from "react";
import FaunaView from "./Fauna";
import { generateFaunaType, FaunaType } from "./utils/sf-fauna";
import { Button } from "@material-ui/core";

import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Creatures: FC = () => {
  const [generatedCreature, setGeneratedCreature] = useState<FaunaType>(
    generateFaunaType(false, true)
  );

  const generateNewCreature = () => {
    setGeneratedCreature(generateFaunaType(false, true));
  };
  return (
    <Container>
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
    </Container>
  );
};

export default Creatures;
