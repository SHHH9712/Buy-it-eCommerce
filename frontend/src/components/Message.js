import React from "react";
import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  return <Alert varient={variant}>{children}</Alert>;
}

export default Message;
