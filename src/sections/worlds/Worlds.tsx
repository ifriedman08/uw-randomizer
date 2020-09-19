import React, { FC, useState, useEffect } from "react";

import { generateBiomeBasics, generatePlanet } from "./utils";
import { uniqueId } from "lodash";
import BiomeView from "./Biome";
import { Grid, Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.section`
  padding: 8px;
`;

const Worlds: FC = () => {
  const [generatedPlanet, setGeneratedPlanet] = useState(generatePlanet());
  const { surfaceBiomeCount, undergroundBiomeCount } = generatedPlanet;
  const [surfaceBiomes, setSurfaceBiomes] = useState<any[]>([]);
  const [undergroundBiomes, setUndergroundBiomes] = useState<any[]>([]);

  useEffect(() => {
    setSurfaceBiomes(generateBiomeBasics(surfaceBiomeCount ?? 1, "surface"));
    setUndergroundBiomes(
      generateBiomeBasics(undergroundBiomeCount ?? 1, "underground")
    );
  }, [generatedPlanet, surfaceBiomeCount, undergroundBiomeCount]);

  const generateNewPlanet = () => {
    setGeneratedPlanet(generatePlanet());
  };

  const copyToClipboard = () => {
    //Before we copy, we are going to select the text.
    var text = document.getElementById("copy-target");
    var selection = window.getSelection();
    var range = document.createRange();
    if (text) {
      range.selectNodeContents(text);
      selection?.removeAllRanges();
      selection?.addRange(range);
      //add to clipboard.
      document.execCommand("copy");
      selection?.removeAllRanges();
      window.open("mailto:*?subject=World:", "_blank");
    }
  };

  const GeneratedComponent = (
    <>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={7}>
          <Grid key="atmospere" item>
            <p>
              <strong>Atmosphere</strong>
            </p>
            <p>{generatedPlanet.atmosphere}</p>
          </Grid>
          <Grid key="gravity" item>
            <p>
              <strong>Gravity</strong>
            </p>
            <p>{generatedPlanet.gravity}</p>
          </Grid>
          <Grid key="temperature" item>
            <p>
              <strong>Temperature</strong>
            </p>
            <p>{generatedPlanet.temperature}</p>
          </Grid>
          {generatedPlanet.pointOfInterest && (
            <Grid key="poi" item>
              <p>
                <strong>POI</strong>
              </p>
              <p>{generatedPlanet.pointOfInterest}</p>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={12} sm={6}>
          <h2>Surface Biomes</h2>
          {surfaceBiomes.map((biome) => (
            <BiomeView key={uniqueId()} biomeData={biome} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Underground Biomes</h2>
          {undergroundBiomes.map((biome) => (
            <BiomeView key={uniqueId()} biomeData={biome} />
          ))}
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={generateNewPlanet}
            >
              Generate New Planet
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={copyToClipboard}
            >
              Copy
            </Button>
          </Grid>
        </Grid>
        <div id="copy-target">{GeneratedComponent}</div>
      </Container>
    </>
  );
};

export default Worlds;
