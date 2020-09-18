import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import { generateVessel, Vessel } from "./utils";
import styled from "styled-components";

const Upgrades = styled.div`
  text-align: left;
`;
const Container = styled.section`
  margin: 0 auto;
  max-width: 400px;
  padding: 8px;
`;

const Vessels: FC = () => {
  const [generatedVessel, setGeneratedVessel] = useState<Vessel>(
    generateVessel()
  );
  const generateNewVessel = () => {
    setGeneratedVessel(generateVessel());
  };
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={generateNewVessel}>
        Generate Vessel
      </Button>
      {generatedVessel.form && (
        <>
          <h3>
            {generatedVessel.form.name} (Class: {generatedVessel.class}, Tier:{" "}
            {generatedVessel.tier})
          </h3>
          <h4>{generatedVessel.form.description}</h4>
        </>
      )}
      <Upgrades>
        {generatedVessel.upgrades?.map((u) => (
          <p key={u.name}>
            <strong>{u.name}</strong>:{" "}
            {u.description.replace("X", generatedVessel.tier.toString())}
          </p>
        ))}
      </Upgrades>
    </Container>
  );
};

export default Vessels;
