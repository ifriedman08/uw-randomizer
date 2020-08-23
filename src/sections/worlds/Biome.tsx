import { Divider } from "@material-ui/core";
import { uniqueId } from "lodash";
import React, { FC } from "react";
import styled from "styled-components";

import { Biome } from "./utils";
import FloraView from "./Flora";
import FaunaView from "./Fauna";

interface IProps {
  biomeData: Biome;
}

export const BiomeContainer = styled.div`
  border: 1px lightgrey solid;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  margin-bottom: 10px;
`;

const BiomeView: FC<IProps> = ({ biomeData }) => {
  return (
    <BiomeContainer>
      <h3>
        <u>
          <strong>{biomeData.type}:</strong>{" "}
          {biomeData.heat !== "No Change" && biomeData.heat} (
          {biomeData.modifier})
        </u>
      </h3>
      <h4>
        Flora (<em>{biomeData.flora.amount}</em>)
      </h4>
      {biomeData.flora.amount !== "None" &&
        biomeData.flora.floraTypes?.map((floraType) => (
          <FloraView key={uniqueId()} flora={floraType} />
        ))}
      <Divider />
      <h4>
        Fauna (<em>{biomeData.fauna.amount}</em>)
      </h4>
      {biomeData.fauna.amount !== "None" && (
        <>
          {biomeData.fauna.basicFaunaTypes?.map((faunaType) => (
            <FaunaView key={uniqueId()} fauna={faunaType} />
          ))}
          {biomeData.fauna.sentientFaunaTypes?.map((faunaType) => (
            <FaunaView key={uniqueId()} fauna={faunaType} />
          ))}
        </>
      )}
    </BiomeContainer>
  );
};

export default BiomeView;
