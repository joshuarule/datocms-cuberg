import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const icons = {
  logo: Logo,
  close: Close,
};

export default (props) => {
  if (props.name in icons) {
    return <>{icons[props.name](props)}</>;
  } else {
    return <>Undefined icon name: {props.name}</>;
  }
};
