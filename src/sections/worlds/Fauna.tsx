import React, { FC } from "react";
import styled from "styled-components";

import { FaunaType } from "./utils/sf-fauna";

interface IProps {
  fauna: FaunaType;
}

export const SentientSection = styled.div`
  margin-left: 25px;
  h5 {
    margin: 2px 0;
  }
`;

const FaunaView: FC<IProps> = ({ fauna }) => {
  const { sentientDetails } = fauna;
  const relativeAmountSymbol =
    fauna.relativeAmount && fauna.relativeAmount > 0 ? "(+)" : "(-)";
  return (
    <>
      <h5 style={{ marginBottom: "3px" }}>
        <strong>
          {sentientDetails && "★ "}
          {fauna.size} {fauna.type}
        </strong>{" "}
        [ {relativeAmountSymbol} | {fauna.threat} | {fauna.temperament} |{" "}
        {fauna.locomotion} | {fauna.grouping}
        {fauna.quirk && (
          <>
            {" "}
            | <em>{fauna.quirk}</em>
          </>
        )}{" "}
        ]
      </h5>
      <SentientSection>
        {sentientDetails && (
          <>
            <h5>
              <strong>Architecture</strong>: {sentientDetails.architecture}
            </h5>
            {sentientDetails.art && (
              <h5>
                <strong>Art</strong>: {sentientDetails.art}
              </h5>
            )}
            <h5>
              <strong>Attitude</strong>: {sentientDetails.attitude}
            </h5>
            <h5>
              <strong>Leadership</strong>: {sentientDetails.leadership}
            </h5>
            <h5>
              <strong>Religion</strong>: {sentientDetails.religion}
            </h5>
            <h5>
              <strong>Tech</strong> Level: {sentientDetails.techLevel}
            </h5>
            <h5>
              <strong>Theme</strong>: {sentientDetails.theme}
            </h5>
            <h5>
              <strong>Unity</strong>: {sentientDetails.unity}
            </h5>
            <h5>
              <strong>Values</strong>: {sentientDetails.values}
            </h5>
          </>
        )}
      </SentientSection>
    </>
  );
};

export default FaunaView;
