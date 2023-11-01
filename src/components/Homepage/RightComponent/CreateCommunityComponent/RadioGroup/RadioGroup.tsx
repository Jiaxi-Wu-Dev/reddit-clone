import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

import "./radiogroup.css";

export default function RadioButtonsGroup() {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Community Type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label={
              <Typography variant="body1" sx={{ fontSize: ".6rem" }}>
                Public, Anyone can view, post, and comment to this community
              </Typography>
            }
            className="communityRadioButtons"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label={
              <Typography variant="body1" sx={{ fontSize: ".6rem" }}>
                Restricted Anyone can view this community, but only approved
                users can post
              </Typography>
            }
            className="communityRadioButtons"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label={
              <Typography variant="body1" sx={{ fontSize: ".6rem" }}>
                Private Only approved users can view and submit to this
                community
              </Typography>
            }
            sx={{ fontSize: 14 }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
