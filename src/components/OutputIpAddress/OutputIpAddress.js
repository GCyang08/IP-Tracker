import React from "react";
import classes from "./OutputIpAddress.module.css";
import Container from "@material-ui/core/Container";

const OutputIpAddress = (props) => {
  return (
    <div>
      <Container>
        <div className={classes.Output}>
          <div className={classes.Grid}>
            <h3>IP ADDRESSS</h3>
            <p>{props.outPutAdddress}</p>
          </div>
          <div className={classes.Grid}>
            <h3>LOCATION</h3>
            <p>{props.outPutLocation}</p>
          </div>
          <div className={classes.Grid}>
            <h3>TIMEZONE</h3>
            <p>{props.outPutTimezone}</p>
          </div>
          <div className={classes.Grid}>
            <h3>ISP</h3>
            <p>{props.outPutIsp}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OutputIpAddress;
