import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { sample } from "lodash";

const questionsTable = ["Who", "What", "When", "Where", "Why"];

export default function CheckboxesGroup() {
  const [playersPresent, setPlayersPresent] = useState<any>({
    Alex: false,
    Devon: false,
    Talicia: false,
    JaMile: false,
    TRX: false,
    Joe: false,
    Noodles: false,
  });
  const [questionResults, setQuestionResults] = useState<any>({});
  const generateQuestions = () => {
    const result = {} as any;
    Object.keys(playersPresent).forEach((player) => {
      if (playersPresent[player]) {
        result[player] = sample(questionsTable);
      }
    });
    setQuestionResults(result);
  };
  const handleChange = (event: any) => {
    setPlayersPresent({
      ...playersPresent,
      [event.target.name]: event.target.checked,
    });
  };

  const genLabel = (name: string, question: string) => {
    if (!question) {
      return name;
    } else {
      return `${name} => ${question}`;
    }
  };
  return (
    <>
      <div>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              checked={playersPresent.Alex}
              onChange={handleChange}
              control={<Checkbox />}
              name="Alex"
              label={genLabel("Alex", questionResults.Alex)}
            />
            <FormControlLabel
              checked={playersPresent.Devon}
              onChange={handleChange}
              control={<Checkbox />}
              name="Devon"
              label={genLabel("Devon", questionResults.Devon)}
            />
            <FormControlLabel
              checked={playersPresent.Talicia}
              onChange={handleChange}
              control={<Checkbox />}
              name="Talicia"
              label={genLabel("Talicia", questionResults.Talicia)}
            />
            <FormControlLabel
              checked={playersPresent.TRX}
              onChange={handleChange}
              control={<Checkbox />}
              name="TRX"
              label={genLabel("TRX", questionResults.TRX)}
            />
            <FormControlLabel
              checked={playersPresent.Noodles}
              onChange={handleChange}
              control={<Checkbox />}
              name="Noodles"
              label={genLabel("Noodles", questionResults.Noodles)}
            />
            <FormControlLabel
              checked={playersPresent.JaMile}
              onChange={handleChange}
              control={<Checkbox />}
              name="JaMile"
              label={genLabel("JaMile", questionResults.JaMile)}
            />
            <FormControlLabel
              checked={playersPresent.Joe}
              control={<Checkbox />}
              onChange={handleChange}
              name="Joe"
              label={genLabel("Joe", questionResults.Joe)}
            />
          </FormGroup>
        </FormControl>
      </div>
      <Button variant="contained" color="primary" onClick={generateQuestions}>
        Generate Questions
      </Button>
    </>
  );
}
