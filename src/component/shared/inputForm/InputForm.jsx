import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./inputForm.scss";
import { MenuItem } from "@mui/material";

const InputForm = ({ inputState, handleInputChange, data }) => {
  console.log(data, inputState);

  return (
    <div className="formContainer">
      <div className="title">
        <p>{data.title}</p>
      </div>
      <div className="inputContainer">
        <Grid container spacing={2} justifyContent="center">
          {data.data.map((item) => {
            return item.option ? (
              <Grid key={item.label} item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  autoComplete="off"
                  id="outlined-basic"
                  value={inputState[item.name]}
                  name={item.name}
                  type={item.type}
                  label={item.label}
                  variant="outlined"
                  onChange={handleInputChange}
                  error={item.error}
                  helperText={item.error === "" ? "" : item.error}
                >
                  {item.option.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            ) : (
              <Grid key={item.label} item xs={12} md={6}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  id="outlined-basic"
                  type={item.type}
                  disabled={item.disabled}
                  name={item.name}
                  label={item.label}
                  value={inputState[item.name]}
                  onChange={handleInputChange}
                  variant="outlined"
                  error={item.error}
                  helperText={item.error === "" ? "" : item.error}
                />
              </Grid>
            );
          })}
          <Grid item xs={12} md={6} mt="5">
            <Button
              sx={{ minHeight: "50px" }}
              type={data.buttonType}
              fullWidth
              variant="outlined"
            >
              {data.buttonType}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InputForm;
