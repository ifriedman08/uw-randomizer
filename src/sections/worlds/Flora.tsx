import React, { FC } from "react";
import { FloraType } from "./utils/sf-flora";

interface IProps {
  flora: FloraType;
}

const FloraView: FC<IProps> = ({ flora }) => {
  const relativeAmountSymbol =
    flora.relativeAmount && flora.relativeAmount > 0 ? "(+)" : "(-)";
  return (
    <>
      <h5>
        <strong>
          {flora.size} {flora.type}
        </strong>{" "}
        [ {relativeAmountSymbol} | {flora.threat}{" "}
        {flora.quirk && (
          <>
            | <em>{flora.quirk}</em>
          </>
        )}{" "}
        ]
      </h5>
    </>
  );
};

export default FloraView;
