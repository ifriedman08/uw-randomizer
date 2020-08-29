import React, { FC, useState } from "react";

import styled from "styled-components";
import { generateEvent, GeneratedEvent } from "./utils";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Events: FC = () => {
  const [generatedEvent, setGeneratedEvent] = useState<GeneratedEvent>(
    generateEvent()
  );
  const generateNewEvent = () => {
    setGeneratedEvent(generateEvent());
  };
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={generateNewEvent}
      >
        Generate Event
      </Button>
      <h3>{generatedEvent.type}</h3>
      <p>{generatedEvent.subType}</p>
    </Container>
  );
};

export default Events;
