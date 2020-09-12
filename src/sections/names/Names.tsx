import React, { FC } from "react";
// import styled from "styled-components";
import { Button } from "@material-ui/core";

// const IFrame = styled.iframe`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 75%;
//   border: 2px;
// `;
const Names: FC = () => {
  return (
    <>
      <Button
        variant="text"
        color="secondary"
        size="medium"
        onClick={() =>
          window.open("https://donjon.bin.sh/scifi/name/", "_blank")
        }
      >
        Link to Donjon
      </Button>
      |
      <Button
        variant="text"
        color="secondary"
        size="medium"
        onClick={() =>
          window.open(
            "https://www.fantasynamegenerators.com/futuristic-names.php",
            "_blank"
          )
        }
      >
        Link to FNG
      </Button>
    </>
  );
};

export default Names;
