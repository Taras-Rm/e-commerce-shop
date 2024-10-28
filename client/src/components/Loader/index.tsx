import React from "react";
import { BeatLoader } from "react-spinners";
import { LoaderSizeMarginProps } from "react-spinners/helpers/props";

function Loader({ ...props }: LoaderSizeMarginProps) {
  return <BeatLoader color="#89C647" size={12} {...props} />;
}

export default Loader;
