import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Community Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Public, Anyone can view, post, and comment to this community"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Restricted Anyone can view this community, but only approved users can post"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Private Only approved users can view and submit to this community"
        />
      </RadioGroup>
    </FormControl>
  );
}
