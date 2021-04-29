import React from "react";
import { Wrapper } from "./Container.style";

export default function Container({ children, styles }) {
  return <Wrapper styles={styles}>{children}</Wrapper>;
}
