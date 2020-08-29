import React, { FC, useState } from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import {
  GeneratedQuest,
  generateQuest,
  generateVillain,
  GeneratedVillain,
} from "./utils";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  button {
    margin-bottom: 2em;
  }
`;

const Quests: FC = () => {
  const [generatedQuest, setGeneratedQuest] = useState<GeneratedQuest>(
    generateQuest()
  );
  const [generatedVillain, setGeneratedVillain] = useState<GeneratedVillain>(
    generateVillain()
  );
  const generateNewQuest = () => {
    setGeneratedQuest(generateQuest());
  };
  const generateNewVillain = () => {
    setGeneratedVillain(generateVillain());
  };
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={generateNewQuest}
      >
        Generate Quest
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={generateNewVillain}
      >
        Generate Villain
      </Button>
      <h3>Quest goal</h3>
      <p>{generatedQuest.goal}</p>
      <h3>Villain</h3>
      <h4>{generatedVillain.goal}</h4>
      <p>{generatedVillain.subGoal}</p>
      <h4>{generatedVillain.method}</h4>
      <p>{generatedVillain.subMethod}</p>
    </Container>
  );
};

export default Quests;
