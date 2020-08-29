import React, { FC } from "react";
import styled from "styled-components";

const IFrame = styled.iframe`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 85%;
  border: 2px;
`;
const Names: FC = () => {
  return <IFrame src="https://www.fantasynamegenerators.com/" />;
};

export default Names;
