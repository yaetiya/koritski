import { Button, IconButton, Snackbar } from "@material-ui/core";
import React, { Component, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';

type TSimpleAlert = {
  isError: boolean;
  message: String;
};
export const SimpleAlerts = ({ isError, message }: TSimpleAlert) => {
  const [open, setOpen] = useState(true);
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isError}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    >
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    </Snackbar>
  );
};

export default SimpleAlerts;
