import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../../assets/icon-arrow.svg";

const useStyles = makeStyles({
  inputContainer: {
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-apart",
    alignItems: "center",
    height: "60px",
    margin: "15px auto",
    width: "50%",
    "@media (min-width: 481px) and (max-width: 767px) ": {
      width: "90%",
    },
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
  },
  submit: {
    backgroundColor: "black",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    color: "white",
    display: "flex",
    width: "60px",
    height: "60px",
  },
  img: {
    margin: "auto",
  },
});

const UserInput = (props) => {
  const classes = useStyles(props);

  const handleSubmit = () => {
    props.getlocationdata("ipAddress", props.currentIpAddress);
  };

  return (
    <div className={classes.inputContainer}>
      <TextField
        placeholder={"Seach for any IP address or domain"}
        InputProps={{
          className: classes.input,
        }}
        style={{
          margin: "25px",
          width: "90%",
        }}
        value={props.value}
        onChange={(e) => {
          props.onTextChange(e);
        }}
        getlocationdata={props.getLocationData}
      />
      <div className={classes.submit} onClick={handleSubmit}>
        <img className={classes.img} src={arrow} alt="submit arrow" />
      </div>
    </div>
  );
};

export default UserInput;
