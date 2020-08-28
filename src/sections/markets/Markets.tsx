import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { generateMarket, Market, marketsTable } from "./utils/uw-markets";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const StyledModal = styled.div`
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  overflow-y: scroll;
  position: revert;
  margin: 2em 3em;
  max-height: 80%;
`;

const Markets: FC = () => {
  const [generatedMarket, setGeneratedMarket] = useState<undefined | Market>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleOpen = () => {
    setModalVisible(true);
  };
  const handleClose = () => {
    setModalVisible(false);
  };

  const generateNewMarket = () => {
    setGeneratedMarket(generateMarket());
  };
  return (
    <Container>
      <ButtonContainer>
        <Button
          variant="contained"
          color="default"
          size="large"
          onClick={handleOpen}
        >
          View All
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => generateNewMarket()}
        >
          Generate Market
        </Button>
      </ButtonContainer>
      <h2>{generatedMarket?.type}</h2>
      <h3>{generatedMarket?.description}</h3>
      <Modal
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <StyledModal>
          <CloseIcon onClick={handleClose} />
          {marketsTable.map((m) => (
            <>
              <h3 id="simple-modal-title">{m.type}</h3>
              <p id="simple-modal-description">{m.description}</p>
            </>
          ))}
        </StyledModal>
      </Modal>
    </Container>
  );
};

export default Markets;
