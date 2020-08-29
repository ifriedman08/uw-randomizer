import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const IFrame = styled.iframe`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75%;
  border: 2px;
`;
const Names: FC = () => {
  return (
    <>
      <Button
        variant="text"
        color="default"
        size="large"
        onClick={() =>
          window.open("https://donjon.bin.sh/scifi/name/", "_blank")
        }
      >
        Link to generator
      </Button>
      <IFrame src="https://www.fantasynamegenerators.com/" />
    </>
  );
};

export default Names;
