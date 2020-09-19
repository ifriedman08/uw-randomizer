import React, { FC, useState } from "react";
import { generateSkill, Skill } from "../characters/utils";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import { startCase } from "lodash";

const SkillBox = styled.div`
  text-align: left;
  white-space: pre-wrap;
  padding: 10px;
`;
const Container = styled.section`
  margin: 0 auto;
  max-width: 400px;
`;
const Skills: FC = () => {
  const [generatedSkill, setGeneratedSkill] = useState<Skill | null>(
    generateSkill()
  );
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGeneratedSkill(generateSkill())}
      >
        Generate Skill
      </Button>
      <SkillBox>
        {generatedSkill && (
          <>
            <h3>{startCase(generatedSkill.name)}</h3>
            <p>{generatedSkill.description}</p>
          </>
        )}
      </SkillBox>
    </Container>
  );
};

export default Skills;
