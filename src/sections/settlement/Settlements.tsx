import React, { FC, useState } from "react";
import { GeneratedSettlement, generateSettlement } from "./utils";
import { Button } from "@material-ui/core";

import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Settlements: FC = () => {
  const [generatedSettlement, setGeneratedSettlement] = useState<
    GeneratedSettlement
  >(generateSettlement);

  const generateNewSettlement = () => {
    setGeneratedSettlement(generateSettlement());
  };
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={generateNewSettlement}
      >
        Generate Settlement
      </Button>
      <p>
        <strong>Social Relations:</strong> {generatedSettlement.raceRelation}
      </p>
      <p>
        <strong>Ruler Status:</strong> {generatedSettlement.rulerStatus}
      </p>
      <p>
        <strong>Notable Traits:</strong> {generatedSettlement.notableTrait}
      </p>
      <p>
        <strong>Known For:</strong> {generatedSettlement.knownFor}
      </p>
      <p>
        <strong>Current Calamity:</strong> {generatedSettlement.calamity}
      </p>
    </Container>
  );
};

export default Settlements;
