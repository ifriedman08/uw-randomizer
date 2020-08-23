import React, { FC, useState } from "react";
import { generateItemTraits, itemTraits, GeneratedItem } from "./utils";
import { startCase, uniqueId } from "lodash";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid, Button } from "@material-ui/core";
import styled from "styled-components";

export const TagContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
`;
const itemTypes = Object.keys(itemTraits);

const Items: FC = () => {
  const [generatedItem, setGeneratedItem] = useState<
    GeneratedItem | undefined
  >();
  const [selectedItemType, setSelectedItemType] = useState<
    undefined | string
  >();
  const [selectedItemClass, setSelectedItemClass] = useState<
    undefined | number
  >();
  const generateNewItem = (itemType?: string, classType?: number) => {
    setGeneratedItem(generateItemTraits(itemType, classType));
  };
  const handleTypeChange = (event: any) => {
    setSelectedItemType(event.target.value);
  };
  const handleClassChange = (event: any) => {
    setSelectedItemClass(event.target.value);
  };

  return (
    <section>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={6} sm={4} md={2}>
          <FormControl fullWidth>
            <InputLabel id="asset-type">Type</InputLabel>
            <Select labelId="asset-type" onChange={handleTypeChange}>
              <MenuItem value={undefined}>None</MenuItem>
              {itemTypes.map((itemType) => (
                <MenuItem value={itemType}>{startCase(itemType)}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <FormControl fullWidth>
            <InputLabel id="asset-class">Class</InputLabel>
            <Select labelId="asset-class" onChange={handleClassChange}>
              <MenuItem value={undefined}>None</MenuItem>
              {[1, 2, 3, 4].map((itemClass) => (
                <MenuItem value={itemClass}>{itemClass}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={() => generateNewItem(selectedItemType, selectedItemClass)}
          >
            Generate Item
          </Button>
        </Grid>
      </Grid>
      {generatedItem && (
        <h2>
          {startCase(generatedItem?.type)} (Class {generatedItem?.classLevel})
        </h2>
      )}
      {generatedItem?.design && (
        <>
          <h3>{startCase(generatedItem.design)}</h3>
          {generatedItem.design === "locomotion" && (
            <p>{generatedItem.locomotion}</p>
          )}
          {generatedItem.design === "weapon" && (
            <p>
              <strong>{generatedItem.weapon?.name}:</strong>
              {generatedItem.weapon?.description}
            </p>
          )}
        </>
      )}
      <TagContainer>
        <div>
          {generatedItem?.tags.map((tag1) => (
            <div key={uniqueId()}>
              <p>
                <strong>{tag1.name}:</strong> {tag1.description}
              </p>
              {tag1.name === "Switching" &&
                generatedItem.switching &&
                generatedItem.switching.map((tag2) => (
                  <p>
                    &#9;<strong>↳ {tag2.name}:</strong> {tag2.description}
                  </p>
                ))}
              {tag1.name === "Deadly" &&
                generatedItem.deadly &&
                generatedItem.deadly.map((tag2) => (
                  <p>
                    <strong>↳ {tag2.name}:</strong> {tag2.description}
                  </p>
                ))}
              {tag1.name === "Armed" && generatedItem.armed && (
                <p>
                  <strong>↳ {generatedItem.armed.name}:</strong>
                  {generatedItem.armed.description}
                </p>
              )}
              {tag1.name === "Tool" && generatedItem.tool && (
                <p>
                  <strong>↳ {generatedItem.tool.name}:</strong>
                  {generatedItem.tool.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </TagContainer>
    </section>
  );
};

export default Items;
